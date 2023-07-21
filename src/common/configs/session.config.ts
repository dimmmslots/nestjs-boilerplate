import { SESSION_SECRET } from '../constants';
import { store } from './redis.config';

export const sessionConfig = {
  store,
  secret: SESSION_SECRET,
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
  saveUninitialized: false,
};
