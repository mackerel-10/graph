import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import env from './config';
import { typeDefs, resolvers } from './graphql';

const app = express();

const startServer = async () => {
  const httpServer = http.createServer(app);
  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  const { serverPort } = env;
  httpServer.listen({ port: serverPort }, () => {
    console.log(`🚀 Server ready at http://localhost:${serverPort}/`);
  });
};

(async () => {
  await startServer();
})();
