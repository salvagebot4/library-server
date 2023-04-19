const { Book } = require("../Models/bookModel");
class BookController {
   
    async getAllBooks() {
    
        return await  Book.getAllBooks();
    }

  

}

module.exports = {
    BookController,
}