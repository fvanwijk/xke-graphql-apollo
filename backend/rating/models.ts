export interface BookModel {
  id: number;
  ratings?: RatingModel[];
}

export interface RatingModel {
  book: number;
  id: number;
  rating: number;
  user: number;
}
