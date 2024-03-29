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
    const event = response.body.hits.hits[0];
    return event;
  } catch (error) {
    console.error(error);
  }
};

export default searchEvent;
