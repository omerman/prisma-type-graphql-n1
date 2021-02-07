import "reflect-metadata";
import { resolvers } from "./generated/type-graphql";
import { buildSchemaSync } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { context } from "./context";

const schema = buildSchemaSync({
  resolvers,
  validate: false,
});

const server = new ApolloServer({
  schema, // from previous step
  playground: true,
  context,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
