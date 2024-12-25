import { Router } from 'express';
import zodValidaction from '../utility/zod.Validaction';
import { authValidaction } from './Auth.Zod.validaction';
import { authController } from './Auth.Controllers';

const router = Router();

router.post(
  '/login',
  zodValidaction(authValidaction.createLoginUserValidaction),
  authController.createLogin,
);

export const authRouter = router;
