const { Product } = require("../Models/productModel");
class ProductController {
   
    async getAllProducts() {
       
        return await Product.getAllProducts();
    }
    async addProduct(productData) {
        // Call getAllUsers method from the User model
        return await Product.addProduct(productData);
    }
    async updateProduct(data) {
        // Call getAllUsers method from the User model
        return await Product.updateProduct(data);
    }

}

module.exports = {
    ProductController,
}