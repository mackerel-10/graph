import { Client } from '@opensearch-project/opensearch';
import fs from 'fs';

const host = process.env.HOST;
const protocol = process.env.PROTOCOL;
const port = process.env.PORT;
const auth = process.env.AUTH;
const ca_certs_path = process.env.CA_CERTS_PATH;

// Optional client certificates if you don't want to use HTTP basic authentication.
// var client_cert_path = '/full/path/to/client.pem'
// var client_key_path = '/full/path/to/client-key.pem'

// Create a client with SSL/TLS enabled.
const client = new Client({
  node: protocol + '://' + auth + '@' + host + ':' + port,
  ssl: {
    ca: fs.readFileSync(ca_certs_path),
    // You can turn off certificate verification (rejectUnauthorized: false) if you're using self-signed certificates with a hostname mismatch.
    // cert: fs.readFileSync(client_cert_path),
    // key: fs.readFileSync(client_key_path)
  },
});

export default client;