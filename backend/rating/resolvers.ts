import { RatingModel } from "../rating/models";
import { Resolvers } from "./types";

const users = [
  { id: 1, name: "Frank van Wijk" },
  { id: 2, name: "Ruben Oostinga" },
];

const ratings: RatingModel[] = [
  { id: 1, rating: 3, user: 1, book: 1 },
  { id: 2, rating: 4, user: 1, book: 1 },
  { id: 3, rating: 2, user: 2, book: 1 },
];

export const resolvers: Resolvers = {
  Query: {
    ratings: () => ratings,
  },
  Rating: {
    user: (rating) => users.find((user) => user.id === rating.user),
    book: (rating) => ({ __typename: "Book", id: rating.book }),
  },
  Book: {
    ratings: (user) => ratings.filter((rating) => rating.user === user.id),
  },
};
