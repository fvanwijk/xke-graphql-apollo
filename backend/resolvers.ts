const authors = [
  { id: 1, firstName: "Joanne", lastName: "Rowling" },
  { id: 2, firstName: "Michael", lastName: "Crichton" },
];

const findAuthor = (id: number) => authors.find((author) => author.id === id);

const books = [
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

export const resolvers = {
  Query: {
    books: () => books,
    book: (_: unknown, { id }: { id: number }) => books.find((book) => book.id === id),
    author: (_: unknown, { id }: { id: number }) => findAuthor(id),
  },
  Book: {
    author: ({ authorId }: { authorId: number }) => findAuthor(authorId),
  },
};
