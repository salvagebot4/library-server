const { Media } = require("../Models/mediaModel");
class MediaController {
   
    async getAllMedias() {
       
        return await Media.getAllMedias();
    }
    async addMedia(mediaData) {
        // Call getAllUsers method from the User model
        return await Media.addMedia(mediaData);
    }

}

module.exports = {
    MediaController,
}