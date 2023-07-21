import z from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.string(),
  SESSION_SECRET: z.string(),
  REDIS_HOST: z.string(),
  REDIS_PORT: z.string(),
});

export const { DATABASE_URL, PORT, SESSION_SECRET, REDIS_HOST, REDIS_PORT } =
  envSchema.parse(process.env);
