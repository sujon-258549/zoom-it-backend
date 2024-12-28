import sendSuccess, { sendSuccessNoData } from '../utility/send-seccess';
import { blogServises } from './Blog.Servises';
import httpStatus from 'http-status';
import catchAsynch from '../utility/catchAsync';

const createBlog = catchAsynch(async (req, res) => {
  const id = req?.user?.email;
  const result = await blogServises.createBlogDB(id, req.body);
  sendSuccess(res, {
    success: true,
    message: 'Blog created successfully',
    statusCode: httpStatus.CREATED,
    data: result,
  });
});
// update blog into db
const updateBlog = catchAsynch(async (req, res) => {
  const { id } = req.params;
  const { email } = req.user;
  const result = await blogServises.updateBlogintoDB(id, email, req.body);
  sendSuccess(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Updated successfully',
    data: result,
  });
});
const deleteBlog = catchAsynch(async (req, res) => {
  const { id } = req.params;
  const email = req?.user?.email;
  const result = await blogServises.deleteBlogintoDB(id, email);
  console.log(result);
  sendSuccessNoData(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Deleted successfully',
  });
});
const getallbloge = catchAsynch(async (req, res) => {
  const result = await blogServises.getAllBlogintoDB(req.query);
  sendSuccess(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs fetched successfully',
    data: result,
  });
});

export const blogController = {
  createBlog,
  updateBlog,
  deleteBlog,
  getallbloge,
};
