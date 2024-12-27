import { Blog } from '../Blog/Blog.Model';
import { TUser } from './User.interface';
import { User } from './User.mole';

const createUser = async (paylod: TUser) => {
  const result = await User.create(paylod);
  return result;
};

// admin block user
const blockUserAdminIntoDB = async (id: string) => {
  // Update the user's isBlocked field to true
  const result = await User.findByIdAndUpdate(
    id, // Filter: document ID
    { isBlocked: true }, // Update: set isBlocked to true
    { new: true }, // Option: return the updated document
  );

  // Check if the user was found and updated
  if (!result) {
    throw new Error('User not found or unable to update.');
  }

  return result;
};

// admin delete blog
const blogDeteleAdminIntoDB = async (id: string) => {
  // Update the user's isBlocked field to true
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const userServises = {
  createUser,
  blockUserAdminIntoDB,
  blogDeteleAdminIntoDB,
};
