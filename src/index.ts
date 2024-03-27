import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import typeDefs from './schema';
import resolvers from './resolvers'
import 'dotenv/config';
import client from './opensearch';
import env from './config';

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
    }),
  );

  const { serverPort } = env;
  await new Promise<void>((resolve) => httpServer.listen({ port: serverPort }, resolve));
  console.log(`🚀 Server ready at http://localhost:${serverPort}/`);
}

(async () => {
  await startServer();
})();

// OpenSearch Connection Test
const testConnectionWithOpenSearch = async () => {
  try {
    const query = {
      query: {
        match: {
          id: '2xVfeo4BWE96sU4Q3dZk'
        },
      },
    };

    const response = await client.search({
      index: 'etw',
      body: query,
    });
    
    console.log(response);
    console.log(response.body);
    console.log(response.body.hits);
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  await testConnectionWithOpenSearch();
})();
