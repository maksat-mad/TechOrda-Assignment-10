import {map, Observable} from "rxjs";
import {Movie} from "../modals/movie";

export function applyQueryFilter(filterQuery: string, result: Observable<Movie[]>): Observable<Movie[]> {
  if (filterQuery !== '') {
    const query = changeQueryForSearch(filterQuery);
    return result.pipe(
      map((movies: Movie[]) => {
        return movies.filter((movie: Movie) => {
          const name = changeQueryForSearch(movie.name);
          return name.includes(query);
        })
      })
    )
  }
  return result;
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
