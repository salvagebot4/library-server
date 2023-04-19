// Manages logic behind each route

const { User } = require("../Models/userModel");

class UserController {
    //Get all users
    async getAllUsers() {
        // Call getAllUsers method from the User model
        return await User.getAllUsers();
    }
    async getAllProducts() {
       
        return await User.getAllProducts();
    }
    async getAllDevices() {
        
        return await User.getAllDevices();
    }
    async getAllMedias() {
       
        return await User.getAllMedias();
    }
    async getAllRooms() {
    
        return await User.getAllRooms();
    }
    async getAllCheckoutHistories() {
    
        return await User.getAllCheckoutHistories();
    }
    async getAllBooks() {
    
        return await User.getAllBooks();
    }

    //TODO
    /*
        Get all other table data
    */


}

module.exports = {
    UserController,
}