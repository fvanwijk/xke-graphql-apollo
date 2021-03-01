import { BookModel } from "../models";
import { Author, Resolvers } from "../types";

const authors: Author[] = [
  { id: 1, firstName: "Joanne", lastName: "Rowling" },
  { id: 2, firstName: "Michael", lastName: "Crichton" },
];

const findAuthor = (id?: number) => authors.find((author) => author.id === id);

const books: BookModel[] = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's stone",
    authorId: 1,
  },
  {
    id: 2,
    title: "Jurassic Park",
    authorId: 2,
  },
];

export const resolvers: Resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find((book) => book.id === id),
    author: (_, { id }) => findAuthor(id),
  },
  Book: {
    author: (book) => findAuthor(book.authorId),
  },
};
