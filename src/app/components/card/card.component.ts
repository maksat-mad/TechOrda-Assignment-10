import {Component, Input} from '@angular/core';
import {Movie} from "../../modals/movie";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() movie!: Movie;
  img_path_prefix = 'assets/movie-covers/';
}
