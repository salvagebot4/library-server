const { pool } = require("../database");
class Media {

    static async getAllMedias() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.media;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all devices.');
        }
    }
}

module.exports = {
    Media,
}