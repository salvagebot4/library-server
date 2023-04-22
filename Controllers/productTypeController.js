const { ProductType } = require("../Models/productTypeModel");
class ProductTypeController {
   
    async getAllProductsTypes() {
       
        return await ProductType.getAllProductsTypes();
    }
    async addProductType(data) {
        // Call getAllUsers method from the User model
        return await  ProductType .addProductType(data);
    }

    async updateproductType(data) {
        // Call getAllUsers method from the User model
        return await  ProductType .updateProductType(data);
    }
   

}

module.exports = {
    ProductTypeController,
}