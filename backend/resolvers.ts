const authors = [
  { firstName: "Joanne", lastName: "Rowling" },
  { firstName: "Michael", lastName: "Crichton" },
];

const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: authors[0],
  },
  {
    title: "Jurassic Park",
    author: authors[1],
  },
];

export const resolvers = {
  Query: {
    books: () => books,
  },
};
