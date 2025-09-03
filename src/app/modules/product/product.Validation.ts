import { z } from "zod";

// ✅ Create Product Validation
export const createProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, "Product name is required")
      .max(200, "Name cannot exceed 200 characters"),
    slug: z
      .string()
      .min(1, "Slug is required"),
    photos: z
      .array(z.string().url("Invalid photo URL"))
      .min(1, "At least one photo is required"),
    description: z.string().min(1, "Description is required"),
    price: z.number().min(0, "Price must be a positive number"),
    discount: z.number().min(0, "Discount must be >= 0").optional(),
    stockStatus: z.boolean().default(true), // true = in stock, false = out of stock
    status: z.enum(["active", "inactive"]).default("active"),
    categories: z.array(z.string()).min(1, "At least one category is required"),
  }),
});

// ✅ Update Product Validation
export const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().max(200, "Name cannot exceed 200 characters").optional(),
    slug: z.string().optional(),
    photos: z.array(z.string().url("Invalid photo URL")).optional(),
    description: z.string().optional(),
    price: z.number().min(0, "Price must be a positive number").optional(),
    discount: z.number().min(0, "Discount must be >= 0").optional(),
    stockStatus: z.boolean().optional(),
    status: z.enum(["active", "inactive"]).optional(),
    categories: z.array(z.string()).optional(),
  }),
});

// ✅ Export all product validations
export const productValidation = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
