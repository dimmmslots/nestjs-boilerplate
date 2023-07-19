import z from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.string(),
});

export const { DATABASE_URL, PORT } = envSchema.parse(process.env);
