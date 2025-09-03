import { Router } from "express";

import { productValidation } from "./product.Validation";
import { productController } from "./product.controllers";
import auth from "../utility/Auth";
import { userRole } from "../User/User.const";
import zodValidation from "../utility/zodValidation";

const router = Router();

// ✅ Create Product (only admin can create)
router.post(
  "/",
  auth(userRole.admin),
  zodValidation(productValidation.createProductValidationSchema),
  productController.createProduct
);

// ✅ Update Product (admin only, or both admin/user if you want)
router.patch(
  "/:id",
  auth(userRole.admin),
  zodValidation(productValidation.updateProductValidationSchema),
  productController.updateProduct
);

// ✅ Delete Product (only admin can delete)
router.delete("/:id", auth(userRole.admin), productController.deleteProduct);

// ✅ Get all products (public)
router.get("/", productController.getAllProducts);

// ✅ Get single product by ID (public)
router.get("/:id", productController.getProductById);

export const productRouter = router;
