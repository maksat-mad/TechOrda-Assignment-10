import { Injectable } from '@angular/core';
import {Movie} from "../modals/movie";
import {map, Observable, of} from "rxjs";
import {movies} from "../mock-data/movies-data";
import {GenreType} from "../modals/genre-type";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getAllMovies(): Observable<Movie[]> {
    return of(movies);
  }

  getMoviesByGenre(genre: GenreType): Observable<Movie[]> {
    return of(movies)
      .pipe(
        map((movies: Movie[]) => movies.filter((movie: Movie) => movie.genres.includes(genre)))
      );
  }
}
