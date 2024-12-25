import AppError from '../../Error/Apperror';
import { User } from '../User/User.mole';
import { TloginUser } from './Auth.interface';
import httpStatus from 'http-status';
import { createToken } from './Auth.utils';
import config from '../../config';

const loginUser = async (payload: TloginUser) => {
  const { email, password } = payload;

  // Check if the email exists
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      'User with this email does not exist.',
    );
  }

  // Compare the password (if using hashed passwords, you would use bcrypt or similar)
  const isPasswordValid = existingUser.password === password; // Replace with bcrypt.compare if hashed
  if (!isPasswordValid) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'User password is Not match.');
  }
  const isBlocked = existingUser.isBlocked; // Replace with bcrypt.compare if hashed
  if (isBlocked) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'User is blocked.');
  }

  const JwtPayload = {
    email: existingUser.email,
    role: existingUser.role as string,
  };

  const accessToken = createToken(
    JwtPayload,
    config.JWT_ACCESS_TOCEN as string,
    config.JWT_EXPIRE_IN_ACCESSTOKEN as string,
  );
  console.log(accessToken);

  return {
    accessToken,
  };
};

export const authServices = {
  loginUser,
};
