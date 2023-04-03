import {Component} from '@angular/core';
import {sortGenre, sortingTypes} from "../../mock-data/search-data";
import {Filter} from "../../modals/search";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  sortingTypes = sortingTypes;
  sortGenre = sortGenre;
  filter: Filter = {
    query: '',
    sortingType: 'all',
    genreType: 'all'
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
    console.log(this.filter)
  }
}
