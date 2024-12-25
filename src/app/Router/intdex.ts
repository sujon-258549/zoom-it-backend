import { Router } from 'express';
import { userRouter } from '../modules/User/User.router';
import { authRouter } from '../modules/Auth/Auth.router';
import { blogRouter } from '../modules/Blog/Blog.router';

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
  {
    path: '/blogs',
    router: blogRouter,
  },
];

allrouter.forEach((route) => router.use(route.path, route.router));
export default router;
