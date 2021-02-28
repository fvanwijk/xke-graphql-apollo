const authors = [
  { firstName: "Joanne", lastName: "Rowling" },
  { firstName: "Michael", lastName: "Crichton" },
];

const books = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's stone",
    author: authors[0],
  },
  {
    id: 2,
    title: "Jurassic Park",
    author: authors[1],
  },
];

export const resolvers = {
  Query: {
    books: () => books,
    book: (_: unknown, { id }: { id: number }) => books.find((book) => book.id === id),
  },
};
