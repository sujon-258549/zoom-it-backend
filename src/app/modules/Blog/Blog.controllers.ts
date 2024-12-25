import { catchAsynch } from '../utility/catchAsync';
import sendSuccess from '../utility/send-seccess';
import { blogServises } from './Blog.Servises';
import httpStatus from 'http-status';

const createUser = catchAsynch(async (req, res) => {
  const result = await blogServises.createBlog(req.body);
  sendSuccess(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

export const blogController = {
  createUser,
};
