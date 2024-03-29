import client from "../opensearch";

const searchEvent = async (args) => {
  try {
    const query = {
      query: {
        term: {
          ...args,
        },
      },
    };

    const response = await client.search({ body: query });
    const eventList = response.body.hits.hits;
    if (eventList.length > 1) {
      return eventList;
    } else {
      return eventList[0];
    }
  } catch (error) {
    console.error(error);
  }
};

const searchEvents = async (args) => {
  try {
    const query = {
      query: {
        terms: {
          ...args,
        },
      },
    };

    const response = await client.search({ body: query });
    const eventList = response.body.hits.hits;
    return eventList;
  } catch (error) {
    console.error(error);
  }
};

export { searchEvent, searchEvents };
