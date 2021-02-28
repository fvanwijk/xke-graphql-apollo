import { ApolloServer, gql } from "apollo-server";

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

// The GraphQL schema in string form
const typeDefs = gql`
  type Query {
    books: [Book]
  }
  type Book {
    title: String
    author: String
  }
`;

// The resolvers
const resolvers = {
  Query: { books: () => books },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
