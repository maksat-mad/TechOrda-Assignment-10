import {Component, inject, Input} from '@angular/core';
import {Movie} from "../../../modals/movie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  route = inject(Router);
  @Input() movie!: Movie;
  img_path_prefix = 'assets/movie-covers/';
}
