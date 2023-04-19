// Manages logic behind each route

const { User } = require("../Models/userModel");

class UserController {
    //Get all users
    async getAllUsers() {
        // Call getAllUsers method from the User model
        return await User.getAllUsers();
    }

    //TODO
    /*
        Get all other table data
    */


}

module.exports = {
    UserController,
}