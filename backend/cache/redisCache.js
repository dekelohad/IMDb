const config = require('config');
const asyncRedis = require('async-redis');
const redisClient = asyncRedis.createClient({
  host: config.get('redis.host'),
  port: config.get('redis.port'),
  auth_pass: 'your-auth-pass',
});

redisClient.on('error', (err) => {
  console.log('Redis error', err.message);
});

redisClient.on('"connected', () => {
  console.log(`Redis is connected on port ${redisPort}`);
});

module.exports = redisClient;
