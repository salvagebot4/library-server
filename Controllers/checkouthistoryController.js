const { CheckoutHistory } = require("../Models/checkouthistoryModel");

class CheckouthistoryController {
   
    async getAllCheckoutHistories() {
    
        return await CheckoutHistory.getAllCheckoutHistories();
    }
    async addCheckouthistory(data) {
        // Call getAllUsers method from the User model
        return await   CheckoutHistory.addCheckouthistory(data);
    }
    async updateCheckouthistory(data) {
        // Call getAllUsers method from the User model
        return await CheckoutHistory.updateCheckouthistory(data);
    }


  

}

module.exports = {
    CheckouthistoryController,
}