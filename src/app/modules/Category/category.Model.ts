import { Schema, model } from "mongoose";
import { TCategory } from "./category.interfaces";

const CategorySchema = new Schema<TCategory>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    image: {
      type: String,
    },
  },

  {
    timestamps: true, // createdAt & updatedAt
  }
);

export const Category = model<TCategory>("Category", CategorySchema);
