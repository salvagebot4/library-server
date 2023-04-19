const { Product } = require("../Models/productModel");
class ProductController {
   
    async getAllProducts() {
       
        return await Product.getAllProducts();
    }
  

}

module.exports = {
    ProductController,
}