import QueryBilder from "../../QueryBalder/querybalder";
import { TCategory } from "./category.interfaces";
import { Category } from "./category.Model";

const searchCategoryFields = ["name", "slug"];

// ✅ Create Category
const createCategoryDB = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};

// ✅ Update Category
const updateCategoryDB = async (id: string, payload: Partial<TCategory>) => {
  const result = await Category.findByIdAndUpdate(id, payload, {
    new: true, // return updated document
    runValidators: true,
  });

  if (!result) {
    throw new Error("Category not found or update failed.");
  }

  return result;
};

// ✅ Delete Category
const deleteCategoryDB = async (id: string) => {
  const result = await Category.findByIdAndDelete(id);
  if (!result) {
    throw new Error("Category not found or already deleted.");
  }
  return result;
};

// ✅ Get all Categories
const getAllCategoriesDB = async (query: Record<string, unknown>) => {
  const categoryQuery = new QueryBilder(Category.find(), query)
    .search(searchCategoryFields)
    .filter()
    .sort()
    .pagination()
    .fields();

  const result = await categoryQuery.modelQuery;
  return result;
};

// ✅ Get single Category by ID
const getCategoryByIdDB = async (id: string) => {
  const result = await Category.findById(id);
  if (!result) {
    throw new Error("Category not found.");
  }
  return result;
};

export const categoryServices = {
  createCategoryDB,
  updateCategoryDB,
  deleteCategoryDB,
  getAllCategoriesDB,
  getCategoryByIdDB,
};
