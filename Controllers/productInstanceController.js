const { ProductInstance } = require("../Models/productInstanceModel");
class ProductInstanceController {
   
    async getAllProductInstances() {
       
        return await ProductInstance .getAllProductInstances();
    }
    async addProductInstance(data) {
        // Call getAllUsers method from the User model
        return await ProductInstance .addProductInstance(data);
    }
    async updateProductInstance(data) {
        // Call getAllUsers method from the User model
        return await ProductInstance .updateProductInstance(data);
    }

}

module.exports = {
    ProductInstanceController,
}