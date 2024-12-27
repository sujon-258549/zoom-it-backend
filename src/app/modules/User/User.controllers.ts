import { catchAsynch } from '../utility/catchAsync';
import sendSuccess from '../utility/send-seccess';
import { userServises } from './User.servises';
import httpStatus from 'http-status';

const createUser = catchAsynch(async (req, res) => {
  const result = await userServises.createUser(req.body);
  sendSuccess(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});
const blockUserAdmin = catchAsynch(async (req, res) => {
  const { userId } = req.params;
  const result = await userServises.blockUserAdminIntoDB(userId);
  console.log(result);
  sendSuccess(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User blocked successfully',
    data: '',
  });
});
const blogDeleteAdmin = catchAsynch(async (req, res) => {
  const { id } = req.params;
  const result = await userServises.blogDeteleAdminIntoDB(id);
  console.log(result);
  sendSuccess(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully',
    data: '',
  });
});

export const userController = {
  createUser,
  blockUserAdmin,
  blogDeleteAdmin,
};
