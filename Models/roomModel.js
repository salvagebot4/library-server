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
    static async updateRoom(data) {
        try {
           
            let result;
            const new_value = data.new_value;
            const column_name = data.column_name;
            const room_number = data.room_number;
            console.log(typeof new_value);
            if(typeof new_value === 'string')
            {
               result = await pool.query(`
                   UPDATE library.room
                   SET ${column_name}='${new_value}'
                   WHERE room_number = '${room_number}';
               `);
            }
            else
            {
               result = await pool.query(`
               UPDATE library.room
               SET ${column_name}=${new_value}
               WHERE room_number = ${room_number};
               `);
            }
            console.log(`room ${room_number} updated`);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to alter room.');
        }
    }
}

module.exports = {
    Room,
}