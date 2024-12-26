import { Types } from 'mongoose';
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
const deleteBlogintoDB = async (authorId: string, email: string) => {
  // Fetch the user's ObjectId by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found.');
  }

  // Get the userId from the user object
  const userId = user._id.toString();

  // Find the blog by authorId
  const blog = await Blog.findOne(new Types.ObjectId(authorId));
  if (!blog) {
    throw new Error('Blog not found.');
  }

  console.log(blog, authorId, user);

  // Check if the user is the author of the blog
  if (userId !== blog.author.toString()) {
    throw new Error('Unauthorized access. You can only delete your own blogs.');
  }

  // Delete the blog
  const result = await Blog.findOneAndDelete({ new Types.ObjectId(authorId)});
  if (!result) {
    throw new Error('Blog not found or already deleted.');
  }

  return result;
};

export const blogServises = {
  createBlogDB,
  updateBlogintoDB,
  deleteBlogintoDB,
};
