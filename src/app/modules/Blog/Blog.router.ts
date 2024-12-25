import { Router } from 'express';
import zodValidaction from '../utility/zod.Validaction';
import { blogValidationSchema } from './Blog.Validaction';
import { blogController } from './Blog.controllers';

const router = Router();

router.post(
  '/',

  zodValidaction(blogValidationSchema),
  blogController.createUser,
);

export const blogRouter = router;
