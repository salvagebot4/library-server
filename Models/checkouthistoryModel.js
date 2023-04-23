const { pool } = require("../database");
class CheckoutHistory {

    static async getAllCheckoutHistories() {
        try {
            const result = await pool.query(`
            SELECT  p.product_name, pi.*, c.checkout_id 
            FROM postgres.library.checkout_history c, postgres.library.product_instance pi, postgres.library.product p
            WHERE c.instance_id = pi.instance_id AND
            pi.product_id = p.product_id;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all devices.');
        }
    }
    static async addCheckoutHistory(data) {
        try {

            const result = await pool.query(`

              INSERT INTO library.checkout_history (checkout_id,instance_id) 
              VALUES (${data.checkout_id},'${data.instance_id}');
            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to add product data');
        }
    }
    static async updateCheckoutHistory(data) {
        try {
           
            let result;
            const new_value = data.new_value;
            const column_name = data.column_name;
            const checkout_id= data.checkout_id;
            console.log(typeof new_value);
            if(typeof new_value === 'string')
            {
               result = await pool.query(`
                   UPDATE library.checkout_history
                   SET ${column_name}='${new_value}'
                   WHERE checkout_id = '${checkout_id}';
               `);
            }
            else
            {
               result = await pool.query(`
               UPDATE library.checkout_history
               SET ${column_name}=${new_value}
               WHERE checkout_id= ${checkout_id};
               `);
            }
            console.log(`checkout history ${checkout_id} updated`);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to alter checkout history.');
        }
    }
    
}

module.exports = {
    CheckoutHistory,
}