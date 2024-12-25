import { TBlog } from './Blog.interfaces';
import { Blog } from './Blog.Model';

const createBlog = async (paylod: TBlog) => {
  const result = await Blog.create(paylod);
  return result;
};
export const blogServises = {
  createBlog,
};
