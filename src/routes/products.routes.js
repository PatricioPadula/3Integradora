import { Router } from "express";
import { ProductsController } from "../controllers/products.controller.js";
import { checkRole, checkAuthenticated } from "../middlewares/auth.js";

const router = Router();

router.get("/", ProductsController.getProducts);
router.get("/:pid", ProductsController.getProduct);
router.post("/", checkAuthenticated, checkRole(["admin", "premium"]), ProductsController.createProduct);
router.put("/:pid", checkAuthenticated, checkRole(["admin"]), ProductsController.updateProduct);
router.delete("/:pid",checkAuthenticated, checkRole(["admin", "premium"]), ProductsController.deleteProduct);


export {router as productsRouter}