/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import httpStatus from 'http-status';

export const handleGenericError = (err: any, res: Response) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message,
    error: err,
  });
};
