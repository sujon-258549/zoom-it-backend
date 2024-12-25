import { Router } from 'express';
import { userRouter } from '../modules/User/User.router';
import { authRouter } from '../modules/Auth/Auth.router';

const router = Router();

const allrouter = [
  {
    path: '/auth',
    router: userRouter,
  },
  {
    path: '/auth',
    router: authRouter,
  },
];

allrouter.forEach((route) => router.use(route.path, route.router));
export default router;
