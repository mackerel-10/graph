// GraphQL schema
const typeDefs = `
  #graphql
  type Source {
    _id: ID!
    taskName: String
    processGuid: String
  }

  type Query {
    hit(_id: ID!): Source
  }
`;

export default typeDefs;
