export interface Sorting {
  sortingType: string,
  options: string[]
}

export interface Filter {
  query: string,
  sortingType: string,
  genreType: string
}
