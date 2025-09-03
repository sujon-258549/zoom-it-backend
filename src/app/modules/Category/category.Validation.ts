import { z } from "zod";

// ✅ Create Category
export const createCategoryValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, "Category name is required")
      .max(100, "Category name cannot exceed 100 characters"),
    slug: z
      .string()
      .min(1, "Slug is required")
      .max(100, "Slug cannot exceed 100 characters"),
  }),
});

// ✅ Update Category
export const updateCategoryValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, "Category name is required")
      .max(100, "Category name cannot exceed 100 characters")
      .optional(),
    image: z
      .string().optional(),
    slug: z
      .string()
      .min(1, "Slug is required")
      .max(100, "Slug cannot exceed 100 characters")
      .optional(),
  }),
});

export const categoryValidation = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};
