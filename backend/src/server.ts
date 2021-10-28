import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { buildSchema } from 'type-graphql';

import UserResolver from './resolvers/person';

async function mainServer() {
  const app = express();

  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  server.applyMiddleware({ app });

  app.listen(3001, () =>
    console.log(`Server is running ... Graphql path: ${server.graphqlPath}`)
  );
}

mainServer();
