const { Product } = require("../Models/productModel");
class ProductController {
   
    async getAllProducts() {
       
        return await Product.getAllProducts();
    }
    async registerProduct(productData) {
        // Call getAllUsers method from the User model
        return await Product.registerProduct(productData);
    }
    async markReserved(reservationData) {
        // Call getAllUsers method from the User model
        return await Product.markReserved(reservationData);
    }

}

module.exports = {
    ProductController,
}