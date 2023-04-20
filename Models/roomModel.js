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
    static async markReserved(reservationData) {
        try {
           
            const result = await pool.query(`

                SELECT * FROM postgres.library.room WHERE  room_size= ${reservationData.room_size} AND is_reserved = ${false};

            `)
            if(result.rows.length > 0)
            { 
                result.rows['email'] = reservationData.email;
                result.rows['is_reserved'] = true;
                return result.rows;
            }
            else
            {
                console.log('Reservation is unavailable for this room');
            }
            
        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all products.');
        }
    }
}

module.exports = {
    Room,
}