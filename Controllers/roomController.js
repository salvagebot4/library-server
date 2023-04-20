const { Room } = require("../Models/roomModel");
class RoomController {
   
    async getAllRooms() {
    
        return await Room .getAllRooms();
    }
    async updateRoom(data) {
        // Call getAllUsers method from the User model
        return await Room.updateRoom(data);
    }

}

module.exports = {
    RoomController,
}