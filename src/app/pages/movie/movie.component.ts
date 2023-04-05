import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {Observable} from "rxjs";
import {Movie} from "../../modals/movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [`.width-550 {
    width: 550px;
  }`]
})
export class MovieComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  movieService = inject(MovieService);
  movie$: Observable<Movie | undefined> | undefined;
  movieId: string = '0';

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('movieId') || '0';
    this.movie$ = this.movieService.getMovieById(+this.movieId);
  }

  noSuchMovie() {
    this.router.navigate(['not-found']);
  }
}
