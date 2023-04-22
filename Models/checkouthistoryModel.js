const { pool } = require("../database");
class CheckoutHistory {

    static async getAllCheckoutHistories() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.checkout_history;
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

              INSERT INTO library.checkout_history (product_id,email,date_checked_out) 
              VALUES (${data.product_id},'${data.email}','${data.date_checked_out}');
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
            const product_id= data.product_id;
            console.log(typeof new_value);
            if(typeof new_value === 'string')
            {
               result = await pool.query(`
                   UPDATE library.checkout_history
                   SET ${column_name}='${new_value}'
                   WHERE product_id = '${product_id}';
               `);
            }
            else
            {
               result = await pool.query(`
               UPDATE library.checkout_history
               SET ${column_name}=${new_value}
               WHERE product_id= ${product_id};
               `);
            }
            console.log(`checkout history ${product_id} updated`);
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