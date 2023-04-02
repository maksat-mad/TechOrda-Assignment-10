import {GenreType} from "./genre-type";

export interface Movies {
  id: number,
  key: string,
  name: string,
  description: string,
  genres: GenreType[],
  rate: string,
  length: string,
  img: string
}
