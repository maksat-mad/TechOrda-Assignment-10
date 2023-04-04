import { Injectable } from '@angular/core';
import {Movie} from "../modals/movie";
import {flatMap, Observable, of} from "rxjs";
import {movies} from "../mock-data/movies-data";
import {Filter} from "../modals/search";
import {applyGenreFilter, applyQueryFilter, applySortingTypeFilter} from "./movie-service-helper";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getAllMovies(): Observable<Movie[]> {
    return of(movies);
  }

  // getMovieById(id: number): Observable<Movie> {
  //   return of(movies);
  // }

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
