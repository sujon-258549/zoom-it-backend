import { z } from 'zod';

export const createblogValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, 'Title is required')
      .max(200, 'Title cannot exceed 200 characters'),
    content: z.string().min(1, 'Content is required'),
    isPublished: z.boolean().optional().default(true),
    image: z.string().optional()
  }),
});
export const updateValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, 'Title is required')
      .max(200, 'Title cannot exceed 200 characters')
      .optional(), // Optional for updates
    content: z.string().min(1, 'Content is required').optional(), // Optional for updates
    isPublished: z.boolean().optional(),
  }),
});

export const blogValidaction = {
  createblogValidationSchema,
  updateValidationSchema,
};
