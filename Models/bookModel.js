const { pool } = require("../database");
class Book {

    static async getAllBooks() {
        try {
            const result = await pool.query(`
                SELECT * FROM postgres.library.book;
            `)
            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to retrieve all devices.');
        }
    }
    static async addBook(bookData) {
        try {
            const is_deleted = false;
            const result = await pool.query(`

              INSERT INTO library.book (isbn, author, description, publisher, publication_date, product_id, page_count,is_deleted) 
              VALUES ('${bookData.isbn}','${bookData.author}','${bookData.description}',
              '${bookData.publisher}', '${bookData.publication_date}', '${bookData.product_id}', ${bookData.page_count},${is_deleted});

            `)

            return result.rows;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to add media data');
        }
    }
}

module.exports = {
    Book,
}