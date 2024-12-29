/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import handelZodErrror from './handelZodEror';
import handelMongoosValidactionError from './handelMongoosValidactionError';
import handelMongoosValidactionCastError from './handelMongoosValidactionCastError';
import handelMongoosValidactionUnicIdError from './handelMongoosValidactionUnicIdError';
import AppError from './Apperror';
import config from '../config';
import { TerrorSourse } from '../interfaces/interfaces';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(error);
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
  } else if (error.name === 'CastError') {
    const simplefideError = handelMongoosValidactionCastError(error);
    statusCod = simplefideError.statusCod;
    message = simplefideError.message;
    errorSourse = simplefideError.errorSourse;
  } else if (error.cod === 11000) {
    const simplefideError = handelMongoosValidactionUnicIdError(error);
    statusCod = simplefideError.statusCod;
    message = simplefideError.message;
    errorSourse = simplefideError.errorSourse;
  } else if (error instanceof AppError) {
    statusCod = error.StatusCod;
    message = error.message;
    errorSourse = [
      {
        path: '',
        message: error?.message,
      },
    ];
  } else if (error instanceof Error) {
    message = error.message;
    errorSourse = [
      {
        path: '',
        message: error?.message,
      },
    ];
  }
  res.status(statusCod).json({
    success: false,
    message,
    errorSourse,
    error,
    stack: config.NODE_ENV === 'development' ? error?.stack : null,
  });
};

export default globalErrorHandler;
