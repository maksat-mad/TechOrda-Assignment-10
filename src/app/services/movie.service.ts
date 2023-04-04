import {Injectable} from '@angular/core';
import {Movie} from "../modals/movie";
import {map, Observable, of} from "rxjs";
import {movies} from "../mock-data/movies-data";
import {Filter} from "../modals/search";
import {applyGenreFilter, applyQueryFilter, applySortingTypeFilter} from "./movie-service-helper";
import {GenreType} from "../modals/genre-type";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getAllMovies(): Observable<Movie[]> {
    return of(movies);
  }

  getMovieById(id: number): Observable<Movie | undefined> {
    return of(movies).pipe(
      map((movies: Movie[]) => {
        return movies.find((movie: Movie) => movie.id === id)
      })
    );
  }

  getMoviesByGenre(genres: GenreType[], id: number) {
    return of(movies).pipe(
      map((movies: Movie[]) => {
        return movies.filter((movie: Movie) => {
          for (let genre of genres) {
            if (movie.genres.includes(genre) && movie.id !== id) {
              return true;
            }
          }
          return false;
        })
      })
    );
  }

  getMoviesByFilter(filter: Filter): Observable<Movie[]> {
    let filteredMovies = of(movies);

    // 1. query
    filteredMovies = applyQueryFilter(filter.query, filteredMovies);

    // 2. sorting type
    filteredMovies = applySortingTypeFilter(filter.sortingType, filteredMovies);

    // 3. genre
    filteredMovies = applyGenreFilter(filter.genreType, filteredMovies);

    return filteredMovies;
  }
}
