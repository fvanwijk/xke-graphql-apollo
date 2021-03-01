import { RatingModel } from "../models";
import { Rating, Resolvers, User } from "../types";

const users: User[] = [
  { id: 1, name: "Frank van Wijk" },
  { id: 2, name: "Ruben Oostinga" },
];

const ratings: RatingModel[] = [
  { id: 1, rating: 3, user: 1 },
  { id: 2, rating: 4, user: 1 },
  { id: 3, rating: 2, user: 2 },
];

export const resolvers: Resolvers = {
  Query: {
    ratings: () => ratings,
  },
  Rating: {
    user: (rating) => users.find((user) => user.id === rating.user),
  },
};
