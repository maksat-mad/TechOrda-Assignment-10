import { Component } from '@angular/core';
import {sortGenre, sortingTypes} from "../../mock-data/search-data";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  sortingTypes = sortingTypes;
  sortGenre = sortGenre;
}
