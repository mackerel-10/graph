import { readFileSync } from 'fs';
import Query from './resolvers/query';
import Source from './resolvers/source';
import EventHeader from './resolvers/eventHeader';

const typeDefs = readFileSync('./src/schemas.graphql', 'utf-8');

// A map of functions which return data for the schema
const resolvers = {
  Query,
  Source,
  EventHeader,
};

export { typeDefs, resolvers };
