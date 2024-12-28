/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { TerrorSourse } from './interfaces/interfaces';
import { ZodError } from 'zod';
import handelZodErrror from './handelZodEror';
import handelMongoosValidactionError from './handelMongoosValidactionError';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCod = 500;
  let message = error.message || 'Something went wrong.';

  let errorSourse: TerrorSourse = [
    {
      path: '',
      message: error.message || 'Something went wrong.',
    },
  ];
  if (error instanceof ZodError) {
    const zodErrorDetail = handelZodErrror(error);
    statusCod = zodErrorDetail.statusCod;
    message = zodErrorDetail.message;
    errorSourse = zodErrorDetail.errorSourse;
  } else if (error.name === 'ValidationError') {
    const mongoseValidactionErrorDetail = handelMongoosValidactionError(error);
    statusCod = mongoseValidactionErrorDetail.statusCod;
    message = mongoseValidactionErrorDetail.message;
    errorSourse = mongoseValidactionErrorDetail.errorSourse;
  }
};

export default globalErrorHandler;
