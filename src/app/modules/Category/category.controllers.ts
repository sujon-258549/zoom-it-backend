import sendSuccess, { sendSuccessNoData } from "../utility/send-seccess";
import { categoryServices } from "./category.Servises";
import httpStatus from "http-status";
import catchAsync from "../utility/catchAsync";

// ✅ Create Category
const createCategory = catchAsync(async (req, res) => {
  const result = await categoryServices.createCategoryDB(req.body);
  sendSuccess(res, {
    success: true,
    message: "Category created successfully",
    statusCode: httpStatus.CREATED,
    data: result,
  });
});

// ✅ Update Category
const updateCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.updateCategoryDB(id, req.body);
  sendSuccess(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category updated successfully",
    data: result,
  });
});

// ✅ Delete Category
const deleteCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  await categoryServices.deleteCategoryDB(id);
  sendSuccessNoData(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category deleted successfully",
  });
});

// ✅ Get All Categories
const getAllCategories = catchAsync(async (req, res) => {
  const result = await categoryServices.getAllCategoriesDB(req.query);
  sendSuccess(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Categories fetched successfully",
    data: result,
  });
});

// ✅ Get Single Category by ID
const getCategoryById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.getCategoryByIdDB(id);
  sendSuccess(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category fetched successfully",
    data: result,
  });
});

export const categoryController = {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
};
