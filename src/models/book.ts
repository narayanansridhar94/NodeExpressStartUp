import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  bookId : String,
  name: String,
  author : String,
  title: String,
  publisherName :String,   
  year: Number,
});

module.exports = mongoose.model("Book", bookSchema);


