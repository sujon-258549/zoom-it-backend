import QueryBilder from '../../QueryBilder/querybilder';
import { User } from '../User/User.mole';
import { TBlog } from './Blog.interfaces';
import { Blog } from './Blog.Model';
const searchBleFild = ['title', 'content'];

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

const updateBlogintoDB = async (
  id: string,
  email: string,
  paylod: Partial<TBlog>,
) => {
  const existid = await User.isUserExistsById(email);

  // Ensure the authorId is an ObjectId
  const toStringBlogDataintoUser = existid?.toString();
  const findAuthorId = await Blog.findOne({ _id: id });

  const findAuthor = findAuthorId?.author.toString();
  //   console.log('find author', findAuthor);
  //   console.log('find User', toStringBlogDataintoUser);
  //   console.log('author', id);
  if (findAuthor !== toStringBlogDataintoUser) {
    throw new Error(
      `Mismatch: Blog author ID (${findAuthor}) does not match user ID (${toStringBlogDataintoUser}).`,
    );
  }
  const result = await Blog.findByIdAndUpdate(id, paylod);
  return result;
};
// delete user
const deleteBlogintoDB = async (authorId: string, email: string) => {
  // Fetch the user's ObjectId by email
  const user = await User.isUserExistsById(email);
  if (!user) {
    throw new Error('User not found.');
  }
  const existid = await User.isUserExistsById(email);

  // Ensure the authorId is an ObjectId
  const toStringBlogDataintoUser = existid?.toString();
  const findAuthorId = await Blog.findOne({ _id: authorId });

  const findAuthor = findAuthorId?.author.toString();
  console.log('find author', findAuthor);
  console.log('find User', toStringBlogDataintoUser);
  console.log('author', authorId);
  if (findAuthor !== toStringBlogDataintoUser) {
    throw new Error(
      `Mismatch: Blog author ID (${findAuthor}) does not match user ID (${toStringBlogDataintoUser}).`,
    );
  }

  // Find the blog by authorId
  const blog = await Blog.findById(authorId);
  console.log(blog, authorId);
  if (!blog) {
    throw new Error('Blog not found.');
  }

  console.log(blog, authorId, user);

  // Check if the user is the author of the blog
  //   if (userId !== blog.author.toString()) {
  //     throw new Error('Unauthorized access. You can only delete your own blogs.');
  //   }

  // Delete the blog
  const result = await Blog.findOneAndDelete();
  if (!result) {
    throw new Error('Blog not found or already deleted.');
  }

  return result;
};

const getAllBlogintoDB = async (query: Record<string, unknown>) => {
  const allBlogFind = new QueryBilder(Blog.find().populate('author'), query)
    .search(searchBleFild)
    .filter()
    .sort()
    .paginaction()
    .fields();
  const result = await allBlogFind.modelQuery;
  return result;
};

export const blogServises = {
  createBlogDB,
  updateBlogintoDB,
  deleteBlogintoDB,
  getAllBlogintoDB,
};
