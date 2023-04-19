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
    static async getAllProducts() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.product;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all products.');
        }
    }
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
    User,
}