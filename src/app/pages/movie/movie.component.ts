import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  route = inject(ActivatedRoute);
  movieId: string = '0';
  prevRoute: string = '/';

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('movieId') || '0';
    this.prevRoute = this.route.snapshot.paramMap.get('prevRoute') || '/';
  }
}
