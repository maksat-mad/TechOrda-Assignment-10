import {Component, inject, OnInit} from '@angular/core';
import {sortGenre, sortingTypes} from "../../mock-data/search-data";
import {Filter} from "../../modals/search";
import {Movie} from "../../modals/movie";
import {MovieService} from "../../services/movie.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movieService = inject(MovieService);
  sortingTypes = sortingTypes;
  sortGenre = sortGenre;
  filter: Filter = {
    query: '',
    sortingType: 'all',
    genreType: 'all'
  }
  movies$: Observable<Movie[]> | undefined;

  ngOnInit(): void {
    this.movies$ = this.movieService.getAllMovies();
  }

  queryChange(query: string) {
    this.filter.query = query;
    this.fetchData();
  }

  sortingChange(sortingType: string) {
    this.filter.sortingType = sortingType;
    this.fetchData();
  }

  genreChange(genreType: string) {
    this.filter.genreType = genreType;
    this.fetchData();
  }

  fetchData() {
    this.movies$ = this.movieService.getMoviesByFilter(this.filter);
  }
}
