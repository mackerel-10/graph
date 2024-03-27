import { Client } from '@opensearch-project/opensearch';
import env from './config';

const { openSearchHost, openSearchProtocol, openSearchPort, openSearchAuth } =
  env;

const client = new Client({
  node:
    openSearchProtocol +
    '://' +
    openSearchAuth +
    '@' +
    openSearchHost +
    ':' +
    openSearchPort,
  ssl: {
    // Turn off the certificate verification
    rejectUnauthorized: false,
  },
});

export default client;
