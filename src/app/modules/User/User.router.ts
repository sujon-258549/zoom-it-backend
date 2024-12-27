import { Router } from 'express';
import { userController } from './User.controllers';
import zodValidaction from '../utility/zod.Validaction';
import { userValidaction } from './User.Zod.Validaction';
import auth from '../utility/Auth';

const router = Router();

router.post(
  '/auth/register',
  zodValidaction(userValidaction.createZodValidaction),
  userController.createUser,
);
router.patch(
  '/admin/users/:userId/block',
  auth('admin'),
  userController.blockUserAdmin,
);
router.delete(
  '/admin/blogs/:id',
  auth('admin'),
  userController.blogDeleteAdmin,
);

export const userRouter = router;
