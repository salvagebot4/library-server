const { pool } = require("../database");
class Device {

    static async getAllDevices() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.device;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all devices.');
        }
    }
    static async addDevice(deviceData) {
        try {

            const result = await pool.query(`

              INSERT INTO library.device (device_id,product_id,manufacturer) 
              VALUES ('${deviceData.device_id}','${deviceData.product_id}','${deviceData.manufacturer}');

            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to add product data');
        }
    }

}

module.exports = {
    Device,
}