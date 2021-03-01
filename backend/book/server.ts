import "graphql-import-node";
import { buildFederatedSchema } from "@apollo/federation";
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.gql";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      // @ts-ignore
      resolvers,
    },
  ]),
});

server.listen(4001).then(({ url }) => {
  console.log(`🚀 Book service ready at ${url}`);
});
