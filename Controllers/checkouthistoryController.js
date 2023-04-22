const { CheckoutHistory } = require("../Models/checkouthistoryModel");

class CheckoutHistoryController {
   
    async getAllCheckoutHistories() {
    
        return await CheckoutHistory.getAllCheckoutHistories();
    }
    async addCheckoutHistory(data) {
        // Call getAllUsers method from the User model
        return await   CheckoutHistory.addCheckoutHistory(data);
    }
    async updateCheckoutHistory(data) {
        // Call getAllUsers method from the User model
        return await CheckoutHistory.updateCheckoutHistory(data);
    }


  

}

module.exports = {
    CheckoutHistoryController,
}