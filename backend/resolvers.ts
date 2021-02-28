const authors = [
  { id: 1, firstName: "Joanne", lastName: "Rowling" },
  { id: 2, firstName: "Michael", lastName: "Crichton" },
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
    author: (_: unknown, { id }: { id: number }) => authors.find((author) => author.id === id),
  },
};
