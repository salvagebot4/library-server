const { CheckoutHistory } = require("../Models/checkouthistoryModel");

class CheckouthistoryController {
   
    async getAllCheckoutHistories() {
    
        return await CheckoutHistory.getAllCheckoutHistories();
    }

  

}

module.exports = {
    CheckouthistoryController,
}