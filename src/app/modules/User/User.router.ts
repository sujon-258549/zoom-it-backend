import { Router } from 'express';
import { userController } from './User.controllers';
import zodValidaction from '../utility/zod.Validaction';
import { userValidaction } from './User.Zod.Validaction';

const router = Router();

router.post(
  '/register',

  zodValidaction(userValidaction.createZodValidaction),
  userController.createUser,
);

export const userRouter = router;
