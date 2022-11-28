const mongoose = require("mongoose");

const addBook = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  authname: {
    type: String,
    required: true,
  },
  pubname: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
  },
  bookprice: {
    type: String,
    required: true,
  },
  availbooks: {
    type: String,
    required: true,
  },
});

//Create Model
const Books = new mongoose.model("book", addBook);

module.exports = Books;