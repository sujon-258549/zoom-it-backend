import catchAsync from '../utility/catchAsync';
import sendSuccess, { sendSuccessNoData } from '../utility/send-seccess';
import { userServises } from './User.servises';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req, res) => {
  const result = await userServises.createUser(req.body);
  sendSuccess(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

const blockUserAdmin = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await userServises.blockUserAdminIntoDB(userId);
  console.log(result);
  sendSuccessNoData(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User blocked successfully',
  });
});
const blogDeleteAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userServises.blogDeteleAdminIntoDB(id);
  console.log(result);
  sendSuccessNoData(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully',
  });
});

export const userController = {
  createUser,
  blockUserAdmin,
  blogDeleteAdmin,
};
