const { pool } = require("../database");
class ProductInstance {

    static async getAllProductInstances() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.product_instance;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all product instances.');
        }
    }
    static async addProductInstance(data) {
        try {

            
          

            const is_deleted = false;
            const status_type_id = 1;
            const result = await pool.query(`

              INSERT INTO library.product_instance (instance_id, product_id,email,status_type_id,checked_out_date,returned_date,is_deleted) 
              VALUES (${data.instance_id},'${data.product_id}',${data.email},${status_type_id},'${data.checked_out_date}',
             '${data.returned_date}',${is_deleted});
            
             
             
            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to add product data');
        }
    }




    static async updateProductInstance(data) {
        try {
             let result;
             const new_value = data.new_value;
             const column_name = data.column_name;
             const instance_id = data.instance_id;
             console.log(typeof new_value);
             if(typeof new_value === 'string')
             {
                result = await pool.query(`
                    UPDATE library.product_instance
                    SET ${column_name}='${new_value}'
                    WHERE instance_id = '${instance_id}';
                `);
             }
             else
             {
                result = await pool.query(`
                UPDATE library.product_instance
                SET ${column_name}=${new_value}
                WHERE instance_id = ${instance_id};
                `);
             }
             console.log(`Product instance ${instance_id} updated`);
             return result;
        }
        catch (error) {
            console.log(error);
            throw new Error('Failed to alter product.');
        }
    }
    
}

module.exports = {
    ProductInstance,
}