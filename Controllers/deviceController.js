const { Device } = require("../Models/deviceModel");
class DeviceController {
   
    async getAllDevices() {
        
        return await Device.getAllDevices();
    }

}

module.exports = {
    DeviceController,
}