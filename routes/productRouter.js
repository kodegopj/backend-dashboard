import express from "express";
import productController from "../controllers/productController.js";


const productRouter = express.Router();

productRouter.get("/info", productController.getProductsInfo);
productRouter.get("/", productController.getProducts);
productRouter.get("/:id", productController.getProduct);
productRouter.delete("/:id", productController.deleteProduct);
productRouter.post("/", productController.createProduct);
productRouter.put("/:id", productController.updateProduct);

export default productRouter;