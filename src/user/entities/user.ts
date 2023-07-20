import { z } from 'zod';

const user = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof user>;

export type UserSafe = Pick<User, 'id'>;
