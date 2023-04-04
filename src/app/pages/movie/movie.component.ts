import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  route = inject(ActivatedRoute);
  movieId: string | null | undefined;
  prevRoute: string | null | undefined;

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('movieId');
    this.prevRoute = this.route.snapshot.paramMap.get('prevRoute');
  }
}
