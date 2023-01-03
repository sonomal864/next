import { createClient } from 'microcms-js-sdk';
import fetch from 'isomorphic-unfetch';
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})


