import {Sorting} from "../modals/search";
import {genreType} from "../modals/genre-type";

export const sortingTypes: Sorting = {
  sortingType: "Sort",
  options: ['name', 'rating']
}

export const sortGenre: Sorting = {
  sortingType: "All genres",
  options: [
    genreType.action, genreType.adventure, genreType.biography, genreType.comedy,
    genreType.crime, genreType.drama, genreType.history, genreType.mystery,
    genreType.scifi, genreType.sport, genreType.thriller
  ]
}
