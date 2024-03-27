import client from './opensearch';

// A map of functions which return data for the schema
const resolvers = {
  Query: {
    taskName: async (parent: undefined, args: Task) => {
      try {
        const { _id } = args;
        console.log(_id);
        const query = {
          query: {
            match: {
              _id,
            },
          },
        };

        const response = await client.search({ body: query });
        const { hits } = response.body.hits;
        console.log(hits[0]._source);
        return hits[0]._source['Task Name'];
      } catch (error) {
        console.error(error);
      }
    },
  },
};

// OpenSearch Connection Test
const testConnectionWithOpenSearch = async () => {
  try {
    const query = {
      query: {
        match: {
          _id: '2xVfeo4BWE96sU4Q3dZk',
        },
      },
    };

    const response = await client.search({ body: query });
    const { hits } = response.body.hits;
    // console.log('response.body.hits.hits', hits); // Response로 받는 Data []로 받음
    // console.log(hits[0]._source);
  } catch (error) {
    console.error(error);
  }
};

export default resolvers;
