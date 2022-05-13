const mongoose= require('mongoose');

const productSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: [true, "Title is needed!!!"],
    },
    price: {
        type: Number,
        required: [true, "Number is needed!!!"],
    },
    description:{
        type: String,
        required: [true, " Description is needed!!!"],
    }
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);

module.exports= Product;