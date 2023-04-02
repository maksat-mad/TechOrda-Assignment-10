import {Component, inject} from '@angular/core';
import {Movie} from "../../modals/movie";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  movieService = inject(MovieService);
  movies: Movie[] = [];

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe({
      next: movies => {
        this.movies = movies;
      }
    });
  }
}
