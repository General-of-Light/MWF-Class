const express = require("express");
const mongoose = require("mongoose");
const api = express();
const port = 4000;


// Mongoose Set-up and Connection

mongoose.connect("mongodb+srv://admin:admin123@uadatabase.61jpu.mongodb.net/BOOK-API?retryWrites=true&w=majority&appName=UADatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("We are connected to MongoDB"));



// Schema
const bookSchema = new mongoose.Schema({
    title: String,
  	author: String,
  	publishedDate: Date,
  	genre: String,
	Price: Number,
    status: {
        type: String,
        default: "Pending"
    }
})

// Model

const Book = mongoose.model("Book", bookSchema);

// Middleware
api.use(express.json());
api.use(express.urlencoded({extended:true}));

// Operations/Endpoint
// ADD A NEW BOOK
app.post('/books/add', (req, res) => {
    const newBook = new Book(req.body);
    
    newBook.save()
      .then(() => res.status(201).send('Book saved!'))
      .catch(err => res.status(400).send('Error saving book: ' + err.message));
  });
  
  
  // GET route to retrieve all books or search by title
  app.get('/books/search', async (req, res) => {
      const { title } = req.query;
    
      try {
        let books;
        if (title) {
          // Search for books with the specified title
          books = await Book.find({ title: { $regex: title, $options: 'i' } });
        } else {
          // Retrieve all books if no title is provided
          books = await Book.find();
        }
        
        res.status(200).json(books);
      } catch (err) {
        res.status(500).send('Error retrieving books: ' + err.message);
      }
    });
  
  
  // GET: Get a book by ID
  app.get('/books/search/:bookId', async (req, res) => {
      try {
        const book = await Book.findById(req.params.bookId);
        if (!book) return res.status(404).send('Book not found');
        res.status(200).json(book);
      } catch (err) {
        res.status(500).send('Error retrieving book: ' + err.message);
      }
    });
    
    // PUT: Update a book by ID
    app.put('/books/update/:bookId', async (req, res) => {
      try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
          new: true,
          runValidators: true,
        });
        if (!updatedBook) return res.status(404).send('Book not found');
        res.status(200).json(updatedBook);
      } catch (err) {
        res.status(400).send('Error updating book: ' + err.message);
      }
    });
    
    // DELETE: Delete a book by ID
    app.delete('/books/delete/:bookId', async (req, res) => {
      try {
        const deletedBook = await Book.findByIdAndDelete(req.params.bookId);
        if (!deletedBook) return res.status(404).send('Book not found');
        res.status(200).send('Book deleted successfully');
      } catch (err) {
        res.status(500).send('Error deleting book: ' + err.message);
      }
    });

// Server start
api.listen(port, () => console.log(`Server is now running at port ${port}.`));