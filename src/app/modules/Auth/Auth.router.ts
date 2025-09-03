import { Router } from 'express';
import { authController } from './Auth.Controllers';
import zodValidation from '../utility/zodValidation';
import { authValidation } from './Auth.Zod.validation';

const router = Router();

router.post(
  '/login',
  zodValidation(authValidation.createLoginUserValidation),
  authController.createLogin,
);

export const authRouter = router;
