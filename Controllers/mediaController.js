const { Media } = require("../Models/mediaModel");
class MediaController {
   
    async getAllMedias() {
       
        return await Media.getAllMedias();
    }
    async addMedia(data) {
        // Call getAllUsers method from the User model
        return await Media.addMedia(data);
    }
    async updateMedia(data) {
        // Call getAllUsers method from the User model
        return await  Media.updateMedia(data);
    }

}

module.exports = {
    MediaController,
}