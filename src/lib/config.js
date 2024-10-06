import Medusa from '@medusajs/medusa-js';

// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = 'https://dmbi-server.onrender.com';

export const medusaClient = new Medusa({
    baseUrl: MEDUSA_BACKEND_URL,
    maxRetries: 3,
});
