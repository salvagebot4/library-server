const { pool } = require("../database");
class ProductType {

    static async getAllProductsTypes() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.product_type;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all product types.');
        }
    }
    static async addProductType(data) {
        try {

            const result = await pool.query(`

              INSERT INTO library.product_type (type_id,type_name) 
              VALUES (${data.type_id},'${data.type_name}');
            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to add product data');
        }
    }




    static async updateProductType(data) {
        try {
           
            let result;
            const new_value = data.new_value;
            const column_name = data.column_name;
            const type_id = data.type_id ;
            console.log(typeof new_value);
            if(typeof new_value === 'string')
            {
               result = await pool.query(`
                   UPDATE library.product_type
                   SET ${column_name}='${new_value}'
                   WHERE type_id  = '${type_id}';
               `);
            }
            else
            {
               result = await pool.query(`
               UPDATE library.product_type
               SET ${column_name}=${new_value}
               WHERE type_id = ${type_id };
               `);
            }
            console.log(`Product Type ${type_id } updated`);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to alter product type.');
        }
    }
    
}
module.exports = {
    ProductType,
}