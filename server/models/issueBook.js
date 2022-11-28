const mongoose = require("mongoose");

const issueBook = new mongoose.Schema({
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
  borrowname: {
    type: String,
    required: true,
  },
  borrownum: {
    type: String,
    required: true,
  },
  borrowadd: {
    type: String,
    required: true,
  },
});

//Create Model
const IssuedBooks = new mongoose.model("issuedbook", issueBook);

module.exports = IssuedBooks;