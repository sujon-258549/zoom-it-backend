import mongoose from 'mongoose';
import { TerrorSourse, TGanaricErrorHandeler } from './interfaces/interfaces';

const handelMongoosValidactionError = (
  err: mongoose.Error.ValidationError,
): TGanaricErrorHandeler => {
  const errorSourse: TerrorSourse = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => ({
      path: val.path,
      message: val.message,
    }),
  );
  return {
    statusCod: 400,
    message: 'Validation error occurred.',
    errorSourse,
  };
};

export default handelMongoosValidactionError;
