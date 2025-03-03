import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

// gets all the products in the database
router.get("/", getProducts);


// adds a product to the database
router.post("/", createProduct);

// updates a product from the database
router.put("/:id", updateProduct);

// deletes a product from the database
router.delete("/:id", deleteProduct);


export default router;