import { Types } from "mongoose";

export interface TProduct {
  name: string;                     // Product name
  slug: string;                     // SEO-friendly slug
  photos: string[];                 // Multiple photos (array of image URLs)
  description: string;              // Product description
  price: number;                    // Product price
  discount?: number;                // Optional discount (percentage or fixed value)
  stockStatus: boolean;             // In stock or not (true/false)
  status: "active" | "inactive";    // Product status
  categories: Types.ObjectId[];     // References to category IDs
}
