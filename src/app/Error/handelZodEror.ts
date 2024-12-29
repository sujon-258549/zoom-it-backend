import { ZodError, ZodIssue } from 'zod';
import { TerrorSourse, TGanaricErrorHandeler } from '../interfaces/interfaces';

const handelZodErrror = (zodError: ZodError): TGanaricErrorHandeler => {
  const formetedError: TerrorSourse = zodError.issues.map(
    (issue: ZodIssue) => ({
      path: issue.path[issue.path.length - 1] || 'unknown',
      message: issue.message,
    }),
  );
  return {
    statusCod: 400,
    message: 'Validation error occurred.',
    errorSourse: formetedError,
  };
};

export default handelZodErrror;
