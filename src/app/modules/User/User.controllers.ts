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

export const userController = {
  createUser,
};
