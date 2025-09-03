import { z } from 'zod';

const UserZodSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'), // Ensure name is not empty
    email: z.string().email('Invalid email format'), // Validate email format
    profileImage: z.string().optional(),
    password: z.string(), // Minimum password length
  }),
});

export const userValidation = {
  createZodValidation: UserZodSchema,
};
