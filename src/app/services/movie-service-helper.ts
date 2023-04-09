import {map, Observable, of} from "rxjs";
import {Movie} from "../models/movie";
import {GenreType} from "../models/genre-type";

export function applyQueryFilter(filterQuery: string, filteredMovies: Observable<Movie[]>): Observable<Movie[]> {
  if (filterQuery !== '') {
    const query = changeQueryForSearch(filterQuery);
    if (query === '' && filterQuery !== '') {
      return of([]);
    }
    return filteredMovies.pipe(
      map((movies: Movie[]) => {
        return movies.filter((movie: Movie) => {
          const name = changeQueryForSearch(movie.name);
          return name.includes(query);
        })
      })
    )
  }
  return filteredMovies;
}

export function applySortingTypeFilter(sortingTypeFilter: string, filteredMovies: Observable<Movie[]>): Observable<Movie[]> {
  switch (sortingTypeFilter) {
    case 'name':
      return applySortByName(filteredMovies);
    case 'rating':
      return applySortByRating(filteredMovies);
  }
  return filteredMovies;
}

export function applyGenreFilter(genre: string, filteredMovies: Observable<Movie[]>): Observable<Movie[]> {
  if (genre !== 'all') {
    return filteredMovies.pipe(
      map((movies: Movie[]) => {
        return movies.filter((movie: Movie) => movie.genres.includes(<GenreType>genre))
      })
    )
  }
  return filteredMovies;
}

function changeQueryForSearch(query: string): string {
  const queryArray: string[] = [];
  query.toLowerCase().split('').forEach(ch => {
    if ((48 <= ch.charCodeAt(0) && ch.charCodeAt(0) <= 57) || (97 <= ch.charCodeAt(0) && ch.charCodeAt(0) <= 122)) {
      queryArray.push(ch);
    }
  });
  return queryArray.join('');
}

function applySortByName(filteredMovies: Observable<Movie[]>): Observable<Movie[]> {
  return filteredMovies.pipe(
    map((movies: Movie[]) => {
      return movies.sort((m1: Movie, m2: Movie) => m1.name > m2.name ? 1 : -1);
    })
  );
}

function applySortByRating(filteredMovies: Observable<Movie[]>): Observable<Movie[]> {
  return filteredMovies.pipe(
    map((movies: Movie[]) => {
      return movies.sort((m1: Movie, m2: Movie) => +m2.rate - +m1.rate);
    })
  );
}
