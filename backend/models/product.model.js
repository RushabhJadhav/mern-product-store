import mongoose from "mongoose";

const productScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // adds createdAt, updatedAt properties by default
});

const Product = mongoose.model('Product', productScheme);

export default Product;