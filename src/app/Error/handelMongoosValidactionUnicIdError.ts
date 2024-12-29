import { TerrorSourse, TGanaricErrorHandeler } from '../interfaces/interfaces';

const handelMongoosValidactionUnicIdError = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
): TGanaricErrorHandeler => {
  const match = err.message.match(/dup key: { name: "(.*?)" }/);
  const errormessage = match ? match[1] : null;
  const errorsourse: TerrorSourse = [
    {
      path: '',
      message: errormessage,
    },
  ];
  return {
    statusCod: 400,
    message: 'Validation error occurred.',
    errorSourse: errorsourse,
  };
};

export default handelMongoosValidactionUnicIdError;
