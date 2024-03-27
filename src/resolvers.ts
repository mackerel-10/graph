import client from './opensearch';

// A map of functions which return data for the schema
const resolvers = {
  Query: {
    hits: async (parent: undefined, args: Task, contextValue, info) => {
      try {
        const { _id } = args;
        console.log(parent, _id, contextValue, info);
        const query = {
          query: {
            match: {
              _id,
            },
          },
        };

        const response = await client.search({ body: query });
        const { hits } = response.body.hits;
        // console.log(hits[0]._source);
        return hits[0]._source;
      } catch (error) {
        console.error(error);
      }
    },
  },
  Source: {
    taskName: (parent: Source) => {
      return parent['Task Name'];
    },
  },
};

const Source = {
  source: () => {},
};

export default resolvers;
