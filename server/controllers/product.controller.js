// write business logic
const Product = require("../model/product.model");

module.exports = {
    createProduct: (req,res)=>{
        Product.create(req.body)
            .then (newProduct=>{
                res.status(200).json(newProduct)
            })
            .catch (err =>{
                res.status(400).json({message: "Something went wrong in create", error: err})
            })
    }
}