const { StatusType } = require("../Models/statusTypeModel");
class StatusTypeController {
   
    async getAllStatusTypes() {
       
        return await StatusType .getAllStatusTypes();
    }
    async addStatusType(data) {
        // Call getAllUsers method from the User model
        return await  StatusType .addStatusType(data);
    }

    async updateStatusType(data) {
        // Call getAllUsers method from the User model
        return await  StatusType .updateStatusType(data);
    }
   

}

module.exports = {
    StatusTypeController,
}