import { Client } from '@opensearch-project/opensearch';

const host = process.env.HOST;
const protocol = process.env.PROTOCOL;
const port = process.env.OPENSEARCH_PORT;
const auth = process.env.AUTH;

const client = new Client({
  node: protocol + '://' + auth + '@' + host + ':' + port,
  ssl: { // Turn off the certificate verification
    rejectUnauthorized: false,
  },
});

export default client;