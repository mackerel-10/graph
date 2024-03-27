import { Client } from '@opensearch-project/opensearch';
// import fs from 'fs';

const host = process.env.HOST;
const protocol = process.env.PROTOCOL;
const port = process.env.OPENSEARCH_PORT;
const auth = process.env.AUTH;


// Create a client with SSL/TLS enabled.
console.log(protocol + '://' + auth + '@' + host + ':' + port);
const client = new Client({
  node: protocol + '://' + auth + '@' + host + ':' + port,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default client;