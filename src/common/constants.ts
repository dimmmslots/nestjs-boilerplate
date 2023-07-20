import z from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.string(),
  SESSION_SECRET: z.string(),
});

export const { DATABASE_URL, PORT, SESSION_SECRET } = envSchema.parse(
  process.env,
);
