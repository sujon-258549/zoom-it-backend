import { Types } from 'mongoose';

export interface TBlog {
  comments: string;
  blogId: Types.ObjectId;
  author: Types.ObjectId;
}
