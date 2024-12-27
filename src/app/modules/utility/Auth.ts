import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { TuserRole } from '../User/User.interface';
import { catchAsynch } from './catchAsync';
import config from '../../config';
import AppError from '../../Error/Apperror';
import { User } from '../User/User.mole';
import httpStatus from 'http-status';

const auth = (...requiredRoles: TuserRole[]) => {
  return catchAsynch(
    async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization?.split(' ')[2];
      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'User is not authorized');
      }
      //   validaction token
      const decoded = jwt.verify(
        token,
        config.JWT_ACCESS_TOCEN as string,
      ) as JwtPayload;
      if (!decoded) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'User is not authorized');
      }
      const { email, role } = decoded;
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'User is not authorized');
      }
      //   check is blocked user
      if (user.isBlocked) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Your User is Blocked!');
      }
      //   role check
      // Check for required roles
      if (requiredRoles && !requiredRoles?.includes(role)) {
        throw new AppError(
          httpStatus.UNAUTHORIZED,
          'User does not have the required permissions',
        );
      }
      req.user = decoded;
      //   console.log(user);
      //   console.log(decoded);

      next();
    },
  );
};

export default auth;
