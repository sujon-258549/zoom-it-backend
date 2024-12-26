import { catchAsynch } from '../utility/catchAsync';
import sendSuccess from '../utility/send-seccess';
import { blogServises } from './Blog.Servises';
import httpStatus from 'http-status';

const createBlog = catchAsynch(async (req, res) => {
  const result = await blogServises.createBlogDB(req.body);
  sendSuccess(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});
const updateBlog = catchAsynch(async (req, res) => {
  const { id } = req.params;
  const result = await blogServises.updateBlogintoDB(id, req.body);
  sendSuccess(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Updated successfully',
    data: result,
  });
});

export const blogController = {
  createBlog,
  updateBlog,
};
