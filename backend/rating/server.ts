import "graphql-import-node";
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.gql";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4002).then(({ url }) => {
  console.log(`🚀 Rating service ready at ${url}`);
});
