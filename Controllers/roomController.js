const { Room } = require("../Models/roomModel");
class RoomController {
   
    async getAllRooms() {
    
        return await Room .getAllRooms();
    }
    async markReserved(reservationData) {
        // Call getAllUsers method from the User model
        return await Room.markReserved(reservationData);
    }

}

module.exports = {
    RoomController,
}