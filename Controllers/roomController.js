const { Room } = require("../Models/roomModel");
class RoomController {
   
    async getAllRooms() {
    
        return await Room .getAllRooms();
    }
  

}

module.exports = {
    RoomController,
}