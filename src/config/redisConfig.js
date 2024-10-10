const Redis=require('ioredis'); // Assuming you are using the 'redis' library
const serverConfig=require('./serverConfig');
const redisConfig={
    port:serverConfig.REDIS_PORT,
    host:serverConfig.REDIS_HOST,
    maxRetriesPerRequest: null,
};


const redisConnection=new Redis(redisConfig);

module.exports=redisConnection;