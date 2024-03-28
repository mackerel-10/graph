import { readFileSync } from 'fs';
import Query from './resolvers/query';
import Source from './resolvers/source';

const typeDefs = readFileSync('./src/schemas.graphql', 'utf-8');

// A map of functions which return data for the schema
const resolvers = {
  Query,
  Source,
};

export { typeDefs, resolvers };
