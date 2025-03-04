// const express = require('express');

// MongoDB connection details:-
// Username: manikanthdaru82
// Password: XnxlQLIafClMdVXt
// Connection String: mongodb+srv://manikanthdaru82:XnxlQLIafClMdVXt@cluster0.m5tgc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";  
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

const app = express();
dotenv.config();
app.use(cors());
const __dirname = path.resolve();
app.use(express.json());

app.use("/api/products", productRoutes);

// console.log(process.env.MONGO_URI);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log("Server started on http://localhost:5000");
});
