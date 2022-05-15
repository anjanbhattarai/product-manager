// write business logic
const Product = require("../model/product.model");
const productRoutes = require("../routes/product.routes");

module.exports = {
    createProduct: (req,res)=>{
        Product.create(req.body)
            .then (newProduct=>{
                res.status(200).json(newProduct)
            })
            .catch (err =>{
                res.status(400).json({message: "Something went wrong in create", error: err})
            })
    },
    getProducts: (req,res)=>{
        Product.find({})
        .then (products =>{
            res.status(200).json(products)
        })
        .catch (err => {
            res.status(400).json ({message: "Something went wrong in getProducts", error: err })
        })
    },
    getProductByID: (req,res) =>{
        Product.findOne({_id:req.params.id})
        .then(product =>{
            res.status(200).json(product);
        })
        .catch ((err) =>{
            res.status(400).json({message: "something went wrong in findById", error: err});
        });
    }
}