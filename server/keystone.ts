import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import 'dotenv/config';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-not-supreme';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 365, // 1 year cookie
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: add data seeding here
  },
  lists: createSchema({
    // TODO: Schema items go here
    User,
  }),
  ui: {
    // TODO: change this for roles
    isAccessAllowed: () => true,
  },
  // TODO: add session values here
});
