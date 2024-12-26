import { NextFunction, Request, Response } from 'express';
import { TuserRole } from '../User/User.interface';
import { catchAsynch } from './catchAsync';

const auth = (...requerdRole: TuserRole[]) => {
  return catchAsynch(
    async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization;
      console.log(token, requerdRole);

      //   validaction token
      next();
    },
  );
};

export default auth;
