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
}

module.exports = {
    Device,
}