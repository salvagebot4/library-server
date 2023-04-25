// Handles data logic
// Interacts with database

//TODO import database pool (client)
const { pool } = require("../database");

class User {

    // Method to get all users in db and their info
    static async getAllUsers() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.user_login;
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
            const is_deleted = false;
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

              INSERT INTO library.user_login (email,password,role,first_name,last_name,item_limit,day_limit,enabled, is_deleted) 
              VALUES ('${userData.email}','${userData.password}','${role}','${userData.first_name}','${userData.last_name}',${itemLimit},${dayLimit},${enabled},${is_deleted});

            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed register user.');
        }
    }
    static async updateUser(data) {
        try {
           
            let result;
            const new_value = data.new_value;
            const column_name = data.column_name;
            const email= data.email;
            console.log(typeof new_value);
            if(typeof new_value === 'string')
            {
               result = await pool.query(`
                   UPDATE library.user_login
                   SET ${column_name}='${new_value}'
                   WHERE email = '${email}';
               `);
            }
            else
            {
               result = await pool.query(`
               UPDATE library.user_login
               SET ${column_name}=${new_value}
               WHERE email= ${email};
               `);
            }
            console.log(`user ${email} updated`);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to alter user.');
        }
    }
    static async postUserInfo(data) {
        try {
           
            const result = await pool.query(`

              SELECT * FROM library.user_login 
              WHERE email = '${data.email}' AND password = '${data.password}';

            `)
            console.log(`user ${data.email} has been retrieved`);
            return result.rows;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to receive user login.');
        }
    }
    static async getuserMostActiveReports(){
        try {
           
            const result = await pool.query(`

              SELECT * FROM library.most_active_users;

            `)
   
            return result.rows;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to Show user most active report..');
        }
    }
    static async getuserInventory(data){
        try {
            const result = await pool.query(`

                SELECT pt.type_name,p.product_id, p.product_name, u.email, u.first_name,u.last_name
                FROM library.product_instance pi, library.user_login u, library.product p, library.product_type pt
                WHERE pi.product_id = p.product_id AND pi.email = '${data.email}' AND u.email = pi.email
                AND pt.type_id = p.product_type_id AND pi.is_reserved = true;

            `)
            return result.rows;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to Show user inventory..');
        }
    }


}

module.exports = {
    User,
}