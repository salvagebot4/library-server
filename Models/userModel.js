// Handles data logic
// Interacts with database

//TODO import database pool (client)
const { pool } = require("../database");

class User {

    // Method to get all users in db and their info
    static async getAllUsers() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.users;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all users.');
        }
    }

}

module.exports = {
    User,
}