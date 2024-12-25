import { TUser } from './User.interface';
import { User } from './User.mole';

const createUser = async (paylod: TUser) => {
  const result = await User.create(paylod);
  return result;
};

export const userServises = {
  createUser,
};
