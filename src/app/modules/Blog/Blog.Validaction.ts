import { z } from 'zod';

export const blogValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, 'Title is required')
      .max(200, 'Title cannot exceed 200 characters'),
    content: z.string().min(1, 'Content is required'),
    isPublished: z.boolean().optional().default(true),
  }),
});
