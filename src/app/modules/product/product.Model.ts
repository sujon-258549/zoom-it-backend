import { Schema, model } from "mongoose";
import { TProduct } from "./product.interfaces";

const ProductSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
    },
    photos: [
      {
        type: String,
        required: true,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
    },
    stockStatus: {
      type: Boolean,
      default: true, // true = in stock, false = out of stock
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

export const Product = model<TProduct>("Product", ProductSchema);
