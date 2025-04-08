const express = require("express");
const router = express.Router();
const { createProduct, getProduct, getSingleProduct, deleteProduct, updateProduct } = require("../controller/product.controllers");

// Route to create a product
router.post("/create", createProduct);
router.get("/get", getProduct);
router.get("/get/single/:id", getSingleProduct);
router.delete("/delete/single/:id", deleteProduct);
router.put("/update/single/:id", updateProduct);






module.exports = router;
