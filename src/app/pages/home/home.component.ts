import {Component, inject, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieService = inject(MovieService);
  movies: Movie[] = [];

  ngOnInit(): void {
    const subscription = this.movieService.getAllMovies().subscribe({
      next: movies => {
        this.movies = movies;
      }
    });
    subscription.unsubscribe();
  }
}
