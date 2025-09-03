
import { Product } from '../product/product.Model';
import { TUser } from './User.interface';
import { User } from './User.mole';

const createUser = async (payload: TUser) => {
  console.log(payload)
  const result = await User.create(payload);
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

const getMe = async (email: string) => {
  const result = await User.findOne({ email: email })
  return result
}

// admin delete blog
const blogDeleteAdminIntoDB = async (id: string) => {
  // Update the user's isBlocked field to true
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const userServices = {
  createUser,
  blockUserAdminIntoDB,
  blogDeleteAdminIntoDB,
  getMe
};
