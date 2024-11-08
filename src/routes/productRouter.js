import { Router } from "express";
import { createProductController, deleteProductController, readAllProductController, readProductController, updateProductController } from "../controller/productController.js";

let productRouter = Router();

productRouter
  .route("/")
  .post(createProductController)
  .get(readAllProductController)

productRouter
  .route("/:id")
  .get(readProductController)
  .patch(updateProductController)
  .delete(deleteProductController)
export default productRouter;