import 'dotenv/config';

const env = {
    // Server Env
    serverPort: parseInt(process.env.SERVER_PORT),
    // openSearch Env: String
    openSearchHost: process.env.OPENSEARCH_HOST,
    openSearchProtocol: process.env.OPENSEARCH_PROTOCOL,
    openSearchPort: process.env.OPENSEARCH_PORT,
    openSearchAuth: process.env.OPENSEARCH_AUTH,
}

export default env;