import client from '../opensearch';

const Query = {
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
  /* hits: async (parent: undefined, args: Args, contextValue, info) => {
    try {
      const { _ids } = args;
      console.log(_ids);
      const query = {
        query: {
          match_,
        },
      };

      const response = await client.search({ body: query });
      const { hits } = response.body.hits;
      return _ids;
    } catch (error) {}
  }, */
};

export default Query;
