const { ProductType } = require("../Models/productTypeModel");
class ProductTypeController {
   
    async getAllProductsTypes() {
       
        return await ProductType.getAllProductsTypes();
    }
    async addProductType(productTypeData) {
        // Call getAllUsers method from the User model
        return await  ProductType .addProductType(productTypeData);
    }

    async updateproductType(data) {
        // Call getAllUsers method from the User model
        return await  ProductType .updateproductType(data);
    }
   

}

module.exports = {
    ProductTypeController,
}