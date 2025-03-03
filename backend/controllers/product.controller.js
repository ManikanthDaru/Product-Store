import Product from "../models/product.model.js";
import mongoose from "mongoose";

// gets all the products in the database
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      data: products, // data is an array of products
    });
  } catch (error) {
    console.log("Error in getting products: ", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// adds a product to the database
export const createProduct = async (req, res) => {
  const product = req.body;
  console.log(product);
  console.log(product.pname);
  console.log(product.price);
  console.log(product.image);
  if (!product.pname || !product.price || !product.image) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields",
    });
  }

  try {
    // Check if the product already exists
    const existingProduct = await Product.findOne({
      pname: product.pname,
      price: product.price,
      image: product.image,
    });
    if (existingProduct) {
      return res.status(400).json({
        success: false,
        message: "Product already exists",
      });
    }
    const newProduct = new Product(product);
    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.log("Error in creating product: ", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// updates a product from the database
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        success: false,
        message: "Invalid Product ID",
      });
    }

    if (!product) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
      
      if (product.pname === updatedProduct.pname && product.price === updatedProduct.price && product.image === updatedProduct.image) {
        return res.status(200).json({
          success: true,
          message: "Product is already there with the same details",
          data: updatedProduct,
        });
      }
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    console.log("Error in updating product: ", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// deletes a product from the database
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log("Error in deleting product: ", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
