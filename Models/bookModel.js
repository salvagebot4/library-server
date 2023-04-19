const { pool } = require("../database");
class Book {

    static async getAllBooks() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.book;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all devices.');
        }
    }
}

module.exports = {
    Book,
}