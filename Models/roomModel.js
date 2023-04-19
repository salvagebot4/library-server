const { pool } = require("../database");
class Room {

    static async getAllRooms() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.room;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all devices.');
        }
    }
}

module.exports = {
    Room,
}