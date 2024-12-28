import { Schema, model } from 'mongoose';
import { TBlog } from './Blog.interfaces';

const BlogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  },
);

export const Blog = model<TBlog>('Blog', BlogSchema);
