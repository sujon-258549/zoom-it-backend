/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import router from './app/Router/intdex';
// import notFound from './app/Error/notfound';
import globalErrorHandler from './app/Error/globalerrorhandalar';

app.use(express.json());
app.use(cors());
// golbal error handaler
// app.use(globalErrorHandler);

// const test = (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
//   Promise.reject();
// };
// app.use('/', test);
// not foud route this is wrong route create massage =
// app.use(notFound);
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
