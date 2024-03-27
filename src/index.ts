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
  const port = parseInt(process.env.SERVER_PORT)
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}/`);
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
          id: {
            query: '2xVfeo4BWE96sU4Q3dZk',
          },
        },
      },
    };

    const response = await client.search({
      index: 'etw',
      body: query,
    });
    
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  await testConnectionWithOpenSearch();
})();
