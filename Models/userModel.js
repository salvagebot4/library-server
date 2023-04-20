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
    static async createUser(userData) {
        try {
            const role = userData.role;
            const enabled = true;
            let dayLimit = 0;
            let itemLimit = 0;
          
            if(role === "student")
            {
                dayLimit = 5;
                itemLimit = 3;
            }
            else if (role === "faculty")
            {
                dayLimit = 10;
                itemLimit = 6;
            }

          
            const result = await pool.query(`

              INSERT INTO library.USERS (email,password,role,first_name,last_name,item_limit,day_limit,enabled) 
              VALUES ('${userData.email}','${userData.password}','${role}','${userData.first_name}','${userData.last_name}',${itemLimit},${dayLimit},${enabled});

            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to send data back to user.');
        }
    }

}

module.exports = {
    User,
}