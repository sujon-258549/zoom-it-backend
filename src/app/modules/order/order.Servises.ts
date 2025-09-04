import AppError from "../../Error/Apperror";
import QueryBalder from "../../QueryBalder/querybalder";
import { User } from "../User/User.mole";
import { TOrder } from "./order.interfaces";
import { Order } from "./order.Model";

const searchOrderFields = ["address.address", "address.district"];

// ✅ Create Order
const createOrderDB = async (payload: TOrder, user: any) => {

  console.log(payload)
  const existUser = await User.findOne({
    email: user.email

  })

  if (!existUser) {
    throw new AppError(httpStatus.NOT_FOUND, "user not found")
  }

  console.log(payload)
  payload.orderId = existUser._id
  // payload.product = existUser._id
  const result = await Order.create(payload);
  return result;
};

// ✅ Update Order
const updateOrderDB = async (id: string, payload: Partial<TOrder>) => {
  const result = await Order.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw new Error("Order not found or update failed.");
  }
  return result;
};

// ✅ Delete Order
const deleteOrderDB = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  if (!result) {
    throw new Error("Order not found or already deleted.");
  }
  return result;
};

// ✅ Get All Orders (filters, search, pagination)
const getAllOrdersDB = async (query: Record<string, unknown>) => {
  const orderQuery = new QueryBalder(Order.find(), query)
    .search(searchOrderFields)
    .filter()
    .sort()
    .pagination()
    .fields();

  const meta = await orderQuery.countTotal();
  const data = await orderQuery.modelQuery;
  return { meta, data };
};

// ✅ Get Single Order by ID
const getOrderByIdDB = async (id: string) => {
  const result = await Order.findById(id);
  if (!result) {
    throw new Error("Order not found.");
  }
  return result;
};

export const orderServices = {
  createOrderDB,
  updateOrderDB,
  deleteOrderDB,
  getAllOrdersDB,
  getOrderByIdDB,
};
