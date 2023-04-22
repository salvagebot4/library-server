// Manages logic behind each route

const { User } = require("../Models/userModel");

class UserController {
    //Get all users
    async getAllUsers() {
        // Call getAllUsers method from the User model
        return await User.getAllUsers();
    }
    async createUser(userData) {
        // Call getAllUsers method from the User model
        return await User.createUser(userData);
    }

    async updateUser(data) {
        // Call getAllUsers method from the User model
        return await User.updateUser(data);
    }
    async postuserInfo(userData) {
        // Call getAllUsers method from the User model
        return await User.postuserInfo(userData);
    }

    //TODO
    /*
        Get all other table data
    */


}

module.exports = {
    UserController,
}