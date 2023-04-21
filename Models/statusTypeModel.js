const { pool } = require("../database");
class StatusType {

    static async getAllstatusTypes() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.status;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all status types.');
        }
    }
    static async addstatusType(data) {
        try {

            const result = await pool.query(`

              INSERT INTO library.status (status_id,status_name) 
              VALUES (${data.status_id},'${data.status_name}');
            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to add status data');
        }
    }
    static async updatestatusType(data) {
        try {
           
            let result;
            const new_value = data.new_value;
            const column_name = data.column_name;
            const status_id = data.status_id ;
            console.log(typeof new_value);
            if(typeof new_value === 'string')
            {
               result = await pool.query(`
                   UPDATE library.status
                   SET ${column_name}='${new_value}'
                   WHERE status_id  = '${status_id}';
               `);
            }
            else
            {
               result = await pool.query(`
               UPDATE library.status
               SET ${column_name}=${new_value}
               WHERE status_id  = ${status_id  };
               `);
            }
            console.log(`Status Type ${status_id } updated`);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to alter status type.');
        }
    }
    
}
module.exports = {
    StatusType,
}