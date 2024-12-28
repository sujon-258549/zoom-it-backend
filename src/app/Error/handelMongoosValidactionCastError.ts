import mongoose from 'mongoose';
import { TerrorSourse, TGanaricErrorHandeler } from './interfaces/interfaces';

const handelMongoosValidactionCastError = (
  err: mongoose.Error.CastError,
): TGanaricErrorHandeler => {
  const errorSource: TerrorSourse = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  return {
    statusCod: 400,
    message: 'invalid object Id',
    errorSourse: errorSource,
  };
};

export default handelMongoosValidactionCastError;
