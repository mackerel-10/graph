// GraphQL schema
const typeDefs = `
  #graphql
  type Query {
    taskName(_id: ID!): String
  }
`;

export default typeDefs;
