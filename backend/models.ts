export interface BookModel {
  id: number;
  title: string;
  authorId: number;
}

export interface RatingModel {
  id: number;
  rating: number;
  user: number;
}
