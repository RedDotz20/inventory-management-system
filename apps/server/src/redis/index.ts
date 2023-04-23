import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.error('Redis Error: ', err));
client.on('connect', () => console.log('Redis Connected!'));

(async () => {
  console.log('Connecting to Redis...');
  await client.connect();
})();

export default client;
