import express from "express";

const router =  express.Router();
import { getProducts, getProductById, deleteproduct, updateProduct, createProduct, createProductReview, getTopProducts } from "../controllers/productController.js";
import {protect , admin} from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.get("/top", getTopProducts);
router.route("/:id/reviews").post(protect, createProductReview);
router.route("/:id").get(getProductById).delete(protect, admin, deleteproduct).put(protect, admin, updateProduct);


export default router;