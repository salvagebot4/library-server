const { pool } = require("../database");
class Book {

    static async getAllBooks() {
        try {
            const result = await pool.query(`
                SELECT p.product_name, b.* FROM postgres.library.book b, postgres.library.product p WHERE b.product_id = p.product_id;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all devices.');
        }
    }
    static async addBook(bookData) {
        try {
            const result = await pool.query(`

              INSERT INTO library.book (author, description, publisher, publication_date, product_id, page_count) 
              VALUES ('${bookData.author}','${bookData.description}',
              '${bookData.publisher}', '${bookData.publication_date}', '${bookData.product_id}', ${bookData.page_count});

            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to add media data');
        }
    }
    static async updateBook(data) {
        try {
           
            let result;
            const new_value = data.new_value;
            const column_name = data.column_name;
            const product_id= data.product_id;
            console.log(typeof new_value);
            if(typeof new_value === 'string')
            {
               result = await pool.query(`
                   UPDATE library.book
                   SET ${column_name}='${new_value}'
                   WHERE product_id = '${product_id}';
               `);
            }
            else
            {
               result = await pool.query(`
               UPDATE library.book
               SET ${column_name}=${new_value}
               WHERE product_id= ${product_id};
               `);
            }
            console.log(`book ${product_id} updated`);
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to alter book.');
        }
    }
}

module.exports = {
    Book,
}