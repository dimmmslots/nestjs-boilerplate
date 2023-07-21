import * as RedisStore from 'connect-redis';
import IoRedis from 'ioredis';
import * as session from 'express-session';
import { REDIS_HOST, REDIS_PORT } from '../constants';

const redisClient = new IoRedis({
  host: REDIS_HOST,
  port: Number(REDIS_PORT),
});

const redisStore = RedisStore(session);

export const store = new redisStore({ client: redisClient });
