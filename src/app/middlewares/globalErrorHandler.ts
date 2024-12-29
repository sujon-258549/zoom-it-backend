/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { handlerZodError } from '../helpers/handleZodError';
import { handleCastError } from '../helpers/handleCastError';
import { handleValidationError } from '../helpers/handlerValidationError';
import { handlerDuplicateError } from '../helpers/handleDuplicateError';
import { handleGenericError } from '../helpers/handleGenericError';
import { TerrorSourse } from '../interfaces/interfaces';
import config from '../config';

//Error:
//Generic Error  - Done
//1.Duplicate - Done
//2. Validation - DOne
//3. Cast Error - Type Casting Error - Done
//4. Zod Error / Joi

type TErrorResponse = {
  success: boolean;
  message: string;
  error: any;
};

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let statusCode = 500;
  let message = 'Something went wrong';
  let errorSources: TerrorSourse = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  console.log(err);
  if (err.name && err.name === 'ZodError') {
    handlerZodError(err, res);
  } else if (err instanceof mongoose.Error.CastError) {
    handleCastError(err, res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    handleValidationError(err, res);
  } else if (err.code && err.code === 11000) {
    handlerDuplicateError(err, res);
  } else if (err instanceof Error) {
    handleGenericError(err, res);
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    error: err,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
  });
};
