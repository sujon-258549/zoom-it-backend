import { Response } from 'express';

interface TSuccess<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

const sendSuccess = <T>(res: Response, data: TSuccess<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export default sendSuccess;
