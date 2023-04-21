const { pool } = require("../database");
class Product {

    static async getAllProducts() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.product;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all products.');
        }
    }
    static async addProduct(productData) {
        try {

            
          

            const is_deleted = false;
            const is_featured = false;
          
            const result = await pool.query(`

              INSERT INTO library.product (product_id,product_type_id,product_name,cost,stock_number,fine_multiplier,is_deleted,is_featured) 
              VALUES ('${productData.product_id}',${productData.product_type_id},'${productData.product_name}',${productData.cost},${productData.stock_number},
             ${productData.fine_multiplier},${is_deleted},${is_featured});
            
             
             
            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to add product data');
        }
    }




    static async updateProduct(data) {
        try {
             let result;
             const new_value = data.new_value;
             const column_name = data.column_name;
             const product_id = data.product_id;
             console.log(typeof new_value);
             if(typeof new_value === 'string')
             {
                result = await pool.query(`
                    UPDATE library.product 
                    SET ${column_name}='${new_value}'
                    WHERE product_id = '${product_id}';
                `);
             }
             else
             {
                result = await pool.query(`
                UPDATE library.product 
                SET ${column_name}=${new_value}
                WHERE product_id = ${product_id};
                `);
             }
             console.log(`Product ${product_id} updated`);
             return result;
        }
        catch (error) {
            console.log(error);
            throw new Error('Failed to alter product.');
        }
    }
    
}

module.exports = {
    Product,
}