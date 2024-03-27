// GraphQL schema
const typeDefs = `
  #graphql
  type Source {
    _id: ID!
    taskName: String
  }

  type Query {
    hits(_id: ID!): Source
  }
`;

export default typeDefs;
