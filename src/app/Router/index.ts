import { Router } from 'express';
import { userRouter } from '../modules/User/User.router';
import { authRouter } from '../modules/Auth/Auth.router';
import { productRouter } from '../modules/product/product.router';
import { categoryRouter } from '../modules/Category/category.router';

const router = Router();

const allRouter = [
  {
    path: '/',
    router: userRouter,
  },
  {
    path: '/auth',
    router: authRouter,
  },
  {
    path: '/products',
    router: productRouter,
  },
  {
    path: '/category',
    router: categoryRouter,
  },
];

allRouter.forEach((route) => router.use(route.path, route.router));
export default router;
