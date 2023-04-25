const { pool } = require("../database");
class Device {

    static async getAllDevices() {
        try {
            const result = await pool.query(`
            SELECT p.*, d.* FROM postgres.library.device d, postgres.library.product p WHERE d.product_id = p.product_id;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all devices.');
        }
    }
    static async addDevice(data) {
        try {
            const result = await pool.query(`

              INSERT INTO library.device (product_id,manufacturer) 
              VALUES ('${data.product_id}','${data.manufacturer}');

            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to add product data');
        }
    }
    static async updateDevice(data) {
        try {
           
            let result;
            const new_value = data.new_value;
            const column_name = data.column_name;
            const product_id= data.product_id;
            console.log(typeof new_value);
            if(typeof new_value === 'string')
            {
               result = await pool.query(`
                   UPDATE library.device
                   SET ${column_name}='${new_value}'
                   WHERE product_id = '${product_id}';
               `);
            }
            else
            {
               result = await pool.query(`
               UPDATE library.device
               SET ${column_name}=${new_value}
               WHERE product_id= ${product_id};
               `);
            }
            console.log(`device ${product_id} updated`);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to alter device.');
        }
    }

}

module.exports = {
    Device,
}