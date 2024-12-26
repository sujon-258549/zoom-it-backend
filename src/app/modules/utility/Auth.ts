import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { TuserRole } from '../User/User.interface';
import { catchAsynch } from './catchAsync';
import config from '../../config';

const auth = (...requerdRole: TuserRole[]) => {
  return catchAsynch(
    async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization;

      //   validaction token
      const decoded = jwt.verify(token, config.JWT_ACCESS_TOCEN);
      next();
    },
  );
};

export default auth;
