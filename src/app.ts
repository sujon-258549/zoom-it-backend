import express, { Application, Request, Response } from 'express';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

const app: Application = express();
import cors from 'cors';
import router from './app/Router/intdex';
import globalErrorHandler from './app/Error/globalerrorhandalar';
import notFound from './app/Error/notfound';
// import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
// import globalErrorHandler from './app/Error/globalerrorhandalar';
// import notFound from './app/Error/notfound';
// import { globalErrorHandler } from '../src/app/middlewares/globalErrorHandler';

app.use(express.json());
app.use(cors());

// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   const statusCode = err.status || 500; // Use err.status if set
//   const message = err.message || 'Something went wrong'; // Default error message

//   // Optionally log the error for debugging
//   console.log(err);

//   // Send the response
//   res.status(statusCode).json({
//     success: false,
//     message,
//     error: err,
//   });
// });

// golbal error handaler

// const test = (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
//   Promise.reject();
// };
// app.use('/', test);
// not foud route this is wrong route create massage =

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
