const { pool } = require("../database");
class Product {

    static async getAllProducts() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.product;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all products.');
        }
    }
    static async registerProduct(productData) {
        try {

            const email = null;
            const date_checked_out = null;
            const is_checked_out = false;
            const is_reserved = false;
            //email null
          
            const result = await pool.query(`

              INSERT INTO library.product (product_id,product_type,product_name,cost,stock_number,email,fine_multiplier,date_checked_out, is_checked_out, is_reserved) 
              VALUES ('${productData.product_id}','${productData.product_type}','${productData.product_name}',${productData.cost},
              ${productData.stock_number+=1},'${email}',${productData.fine_multiplier},${date_checked_out},${is_checked_out},${is_reserved});

            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to send data back to user.');
        }
    }




    static async markReserved(reservationData) {
        try {
           
            //if stock number is greater than or equal to 1
        
            const result = await pool.query(`

                SELECT * FROM postgres.library.product WHERE product_type = ${reservationData.product_type} AND product_name = ${reservationData.product_name} AND
                 is_checked_out= ${false} AND is_reserved = ${false};

            `)
            if(result.rows['stock_number'] > 0)
            {
                result.rows['email'] = reservationData.email;
                result.rows['is_reserved'] = true;
                return result.rows;
            }
            else
            {
                console.log('Reservation is unavailable for this product');
            }
            

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all products.');
        }
    }
    
}

module.exports = {
    Product,
}