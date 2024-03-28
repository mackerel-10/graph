import client from './opensearch';

// A map of functions which return data for the schema
const resolvers = {
  // Parameters: parent, args, contextValue, info
  Query: {
    hit: async (parent: undefined, args: Args, contextValue, info) => {
      try {
        const { _id } = args;
        const query = {
          query: {
            match: {
              _id,
            },
          },
        };

        const response = await client.search({ body: query });
        const { hits } = response.body.hits;
        return hits[0];
      } catch (error) {
        console.error(error);
      }
    },
  },
  Source: {
    taskName: (parent: Hit) => {
      const { _source } = parent;

      return _source['Task Name'];
    },
    processGuid: (parent: Hit) => {
      const { _source } = parent;

      return _source.ProcessGuid;
    },
  },
};

export default resolvers;
