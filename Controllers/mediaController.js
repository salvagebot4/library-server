const { Media } = require("../Models/mediaModel");
class MediaController {
   
    async getAllMedias() {
       
        return await Media.getAllMedias();
    }
  

}

module.exports = {
    MediaController,
}