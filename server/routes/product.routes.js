const productController = require('../controllers/product.controller');

module.exports = (app)=>{
    app.post("/api/products", productController.createProduct)
    app.get("/api/products/",productController.getProducts)
    app.get("/api/products/:id",productController.getProductByID)
    
}