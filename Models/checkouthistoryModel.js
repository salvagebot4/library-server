const { pool } = require("../database");
class CheckoutHistory {

    static async getAllCheckoutHistories() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.checkout_history;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all devices.');
        }
    }
}

module.exports = {
    CheckoutHistory,
}