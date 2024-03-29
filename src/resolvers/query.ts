import client from "../opensearch";
import searchEvent from "../db/searchEvent";

const Query = {
  event: async (parent: undefined, args: Args, contextValue, info) => {
    try {
      const data = await searchEvent(args);

      return data;
    } catch (error) {
      console.error(error);
    }
  },
  events: async (parent: undefined, args: Args, contextValue, info) => {
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
  procedures: async (parent, args: Args) => {
    try {
      const data = await searchEvent(args);

      return data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default Query;
