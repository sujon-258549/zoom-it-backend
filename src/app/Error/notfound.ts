/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const statusCod = 500;
  const message = 'Router is Notfound!';

  res.status(statusCod).json({
    success: false,
    message: message,
    Error: 'plsease Enter your Rite route',
  });
};

export default notFound;
