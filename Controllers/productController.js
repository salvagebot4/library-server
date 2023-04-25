const { Product } = require("../Models/productModel");
class ProductController {
   
    async getAllProducts() {
       
        return await Product.getAllProducts();
    }
    async addProduct(data) {
  
        return await Product.addProduct(data);
    }
    async updateProduct(data) {
      
        return await Product.updateProduct(data);
    }
    //VIEWS
    async getProductAvailabilityReports() {
      
        return await Product.getProductAvailabilityReports();
    }
    async getproductMostBorrowedReports() {
      
        return await Product.getproductMostBorrowedReports();
    }
    async getproductMostBorrowedReports() {
      
        return await Product.getproductMostBorrowedReports();
    }
  

}


module.exports = {
    ProductController,
}