import { Router } from 'express';
import { userController } from './User.controllers';
import { userValidation } from './User.Zod.Validation';
import auth from '../utility/Auth';
import zodValidation from '../utility/zodValidation';

const router = Router();

router.post(
  '/auth/register',
  zodValidation(userValidation.createZodValidation),
  userController.createUser,
);
router.patch(
  '/admin/users/:userId/block',
  auth('admin'),
  userController.blockUserAdmin,
);
router.get(
  '/me',
  auth('admin', "user"),
  userController.getMe,
);
router.delete(
  '/admin/blogs/:id',
  auth('admin'),
  userController.blogDeleteAdmin,
);

export const userRouter = router;
