import client from "../opensearch";

const Query = {
  hit: async (parent: undefined, args: Args, contextValue, info) => {
    try {
      const { _id } = args;
      const query = {
        query: {
          term: {
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
  hits: async (parent: undefined, args: Args, contextValue, info) => {
    try {
      const { _ids, processGuid, taskName } = args;
      let queryList = [];

      if (_ids) {
        const query = {
          terms: {
            _id: _ids,
          },
        };
        queryList.push(query);
      } else if (processGuid) {
        const query = {
          term: {
            ProcessGuid: processGuid,
          },
        };
        queryList.push(query);
      } else if (taskName) {
        // Search Event with RuleName & ParentProcessGuid
        const query: OpenSearchQuery = {
          fuzzy: {
            "Task Name": taskName,
          },
        };
        queryList.push(query);
      }

      queryList = queryList.reduce((preQuery, curQuery) => {
        return { ...preQuery, ...curQuery };
      }, {});

      const body = {
        query: { ...queryList },
      };

      const response = await client.search({ body });
      const { hits } = response.body.hits;
      return hits;
    } catch (error) {
      console.error(error);
    }
  },
};

export default Query;
