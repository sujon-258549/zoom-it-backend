import { AnyZodObject } from 'zod';
import { NextFunction, Request, Response } from 'express';
import catchAsynch from './catchAsync';

const zodValidaction = (schema: AnyZodObject) => {
  return catchAsynch(
    async (req: Request, res: Response, next: NextFunction) => {
      await schema.parseAsync({
        body: req.body,
      });
      next();
    },
  );
};

export default zodValidaction;
