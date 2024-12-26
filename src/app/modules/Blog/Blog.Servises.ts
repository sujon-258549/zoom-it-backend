import { User } from '../User/User.mole';
import { TBlog } from './Blog.interfaces';
import { Blog } from './Blog.Model';

const createBlogDB = async (email: string, payload: TBlog) => {
  // Find the user by email
  const findEmail = await User.findOne({ email });

  if (!findEmail) {
    throw new Error('User not found.');
  }
  // Attach the author's ID to the payload
  const blogData = {
    ...payload,
    author: findEmail._id, // Assuming "author" is the field for the author's ID
  };

  // Create the blog entry
  const result = await Blog.create(blogData);
  return result;
};

const updateBlogintoDB = async (id: string, paylod: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, paylod);
  return result;
};
// delete bloge
const deleteBlogintoDB = async (authorId: string, email: string) => {
  // Compare userId with the blog's author
  const blog = await Blog.findOne({ authorId });
  console.log(authorId);
  if (!blog) {
    throw new Error('Blog not found.');
  }

  // Fetch the user's ObjectId
  const userId = await User.isUserExistsById(email);
  if (!userId) {
    throw new Error('User not found.');
  }

  if (blog.author.toString() !== userId.toString()) {
    throw new Error('Unauthorized access. You can only delete your own blogs.');
  }

  // Delete the blog
  const result = await Blog.findOneAndDelete({ authorId });
  return result;
};

export const blogServises = {
  createBlogDB,
  updateBlogintoDB,
  deleteBlogintoDB,
};
