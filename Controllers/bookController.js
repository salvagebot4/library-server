const { Book } = require("../Models/bookModel");
class BookController {
   
    async getAllBooks() {
    
        return await  Book.getAllBooks();
    }
    async addBook(bookData) {
        // Call getAllUsers method from the User model
        return await Book.addBook(bookData);
    }
  

}

module.exports = {
    BookController,
}