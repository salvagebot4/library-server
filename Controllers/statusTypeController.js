const { StatusType } = require("../Models/statusTypeModel");
class StatusTypeController {
   
    async getAllstatusTypes() {
       
        return await StatusType .getAllstatusTypes();
    }
    async addstatusType(data) {
        // Call getAllUsers method from the User model
        return await  StatusType .addstatusType(data);
    }

    async updatestatusType(data) {
        // Call getAllUsers method from the User model
        return await  StatusType .updatestatusType(data);
    }
   

}

module.exports = {
    StatusTypeController,
}