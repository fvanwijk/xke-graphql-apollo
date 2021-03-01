import "graphql-import-node";
import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";

const gateway = new ApolloGateway({
  serviceList: [
    { name: "book", url: "http://localhost:4001" },
    { name: "rating", url: "http://localhost:4002" },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
});
