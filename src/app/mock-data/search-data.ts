import {Sorting} from "../models/search";
import {genreType} from "../models/genre-type";

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
