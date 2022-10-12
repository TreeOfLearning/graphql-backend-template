import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import resolvers from "./resolvers";
import { ApolloServer } from "apollo-server";
import Container from "./container";

const schema = buildSchemaSync({
  resolvers,
  container: new Container(),
});

const apolloServer = new ApolloServer({
  schema,
});

apolloServer
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  })
  .catch((error) => {
    console.error(error);
  });
