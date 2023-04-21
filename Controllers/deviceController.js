const { Device } = require("../Models/deviceModel");
class DeviceController {
   
    async getAllDevices() {
        
        return await Device.getAllDevices();
    }
    async addDevice(deviceData) {
        // Call getAllUsers method from the User model
        return await Device.addDevice(deviceData);
    }
    async updateDevice(data) {
        // Call getAllUsers method from the User model
        return await Device.updateDevice(data);
    }


}

module.exports = {
    DeviceController,
}