import { Injectable } from '@angular/core';
import {Movie} from "../modals/movie";
import {Observable, of} from "rxjs";
import {movies} from "../mock-data/movies-data";
import {Filter} from "../modals/search";
import {applyQueryFilter} from "./movie-service-helper";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getAllMovies(): Observable<Movie[]> {
    return of(movies);
  }

  getMoviesByFilter(filter: Filter): Observable<Movie[]> {
    let result = of(movies);

    // 1. query
    result = applyQueryFilter(filter.query, result);

    // 2. sorting type
    // if (filter.sortingType !== 'all') {
    //   switch (filter.sortingType) {
    //     case 'name':
    //
    //   }
    // }

    // 3. genre
    return result;
    // return of(movies)
    //   .pipe(
    //     map((movies: Movie[]) => movies.filter((movie: Movie) => movie.genres.includes(genre)))
    //   );
  }
}
