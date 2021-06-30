 
const Book = require("../models/book");

const getAllBooks = (req: any, res: any, next: any) => {
  Book.find({})
    .exec()
    .then((listOfUser: any) => {
      res.status(200).json(listOfUser);
    })
    .catch((err: any) => {
      res.status(404).json({
        message: err.toString(),
      });
    });
};

const createBook = (req: any, res: any, next: any) => {
  // Create a new blog post
  var book = new Book({
    bookId : Math.floor(100000 + Math.random() * 900000),
    name: req.body.name,
    author:req.body.author,
    title: req.body.title,
    publisherName: req.body.publisherName,
    year:req.body.year,
  });
  // Insert the article in our MongoDB database
  book
    .save()
    .then((bookRes: any) => {
      res.status(201).json({
        bookDetails: {
          name: bookRes.name,
          author: bookRes.author,
          title: bookRes.title,
          publisherName: bookRes.publisherName,
          year: bookRes.year,
        },
      });
    })
    .catch((err: any) => {
      res.status(400).json({
        message: err.toString(),
      });
    });
};

const updateBook = (req: any, res: any, next: any) => {
  // Create a new blog post
  var book = new Book({
    bookId : req.params.id ,
    name: req.body.name,
    author: req.body.author,
    title: req.body.title,
    publisherName: req.body.publisherName,
    year: req.body.year,
  });
  // Insert the article in our MongoDB database
  book
    .update()
    .then((bookRes: any) => {
      res.status(201).json({
        bookDetails: {
          name: bookRes.name,
          author: bookRes.author,
          title: bookRes.title,
          publisherName: bookRes.publisherName,
          year: bookRes.year,
        },
      });
    })
    .catch((err: any) => {
      res.status(400).json({
        message: err.toString(),
      });
    });
};

const getByIdBook = (req: any, res: any, next: any) => {
  

  Book.find({ bookId: req.params.id })
    .exec()
    .then((listOfUser: any) => {
      res.status(200).json(listOfUser);
    })
    .catch((err: any) => {
      res.status(404).json({
        message: err.toString(),
      });
    });
};

const deleteBook = (req: any, res: any, next: any) => {
  Book.deleteOne({ bookId: req.params.id  })
    .exec()
    .then((listOfUser: any) => {
      res.status(200).json(listOfUser);
    })
    .catch((err: any) => {
      res.status(404).json({
        message: err.toString(),
      });
    });
};
export default { getAllBooks, createBook, deleteBook, getByIdBook, updateBook };
