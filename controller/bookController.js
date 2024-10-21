const Book = require("../models/Book");

// Ajouter un nouveau livre
exports.addBook = async (req, res) => {
  console.log(req.body);
  try {
    const book = new Book({ ...req.body }); 
    await book.save();
    res.status(200).send({ msg: "Book added successfully", book });
  } catch (error) {
    console.error(error); 
    res.status(500).send({ msg: "Book not added", error });
  }
};

// Récupérer tous les livres
exports.getBook = async (req, res) => {
  try {
    const allBooks = await Book.find(); 
    res.status(200).send({ msg: "Books fetched successfully", allBooks });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Books not fetched", error });
  }
};
