import { Schema, model } from 'mongoose';
import { TBlog } from './Blog.interfaces';

const BlogSchema = new Schema<TBlog>(
  {
    comments: {
      type: String,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: 'blogs',
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },

  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  },
);

export const Blog = model<TBlog>('Blog', BlogSchema);
