import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    pname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true }); // timestamps: true will automatically create fields createdAt and updatedAt

const Product = mongoose.model('Product', productSchema); // products collection is created in the database

export default Product;