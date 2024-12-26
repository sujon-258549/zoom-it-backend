import { Router } from 'express';
import zodValidaction from '../utility/zod.Validaction';
import { blogValidaction } from './Blog.Validaction';
import { blogController } from './Blog.controllers';
import auth from '../utility/Auth';
import { userRole } from '../User/User.const';

const router = Router();

router.post(
  '/',
  zodValidaction(blogValidaction.createblogValidationSchema),
  blogController.createBlog,
);

router.patch(
  '/:id',
  auth(userRole.user, userRole.admin),
  zodValidaction(blogValidaction.updateValidationSchema),
  blogController.updateBlog,
);

export const blogRouter = router;
