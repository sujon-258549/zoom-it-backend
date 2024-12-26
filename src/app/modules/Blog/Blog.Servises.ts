import { TBlog } from './Blog.interfaces';
import { Blog } from './Blog.Model';

const createBlogDB = async (paylod: TBlog) => {
  const result = await Blog.create(paylod);
  return result;
};
const updateBlogintoDB = async (id: string, paylod: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, paylod);
  return result;
};

export const blogServises = {
  createBlogDB,
  updateBlogintoDB,
};
