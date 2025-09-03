import { Response } from 'express';

interface TSuccess<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
interface TSuccessnodata {
  statusCode: number;
  success: boolean;
  message: string;
}

type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

interface TSuccess<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  meta?: TMeta; // optional metadata
}

const sendSuccess = <T>(res: Response, data: TSuccess<T>) => {
  return res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
    meta: data.meta
  });
};


export const sendSuccessNoData = (res: Response, data: TSuccessnodata) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
  });
};

export default sendSuccess;
