import express from "express";
import bookControllers from "../controllers/book.controller";
import { bookValidation } from "../validation/book.validation";
const bookRouter = express.Router();
 

bookRouter.get("/", bookControllers.getAllBooks);
bookRouter.post("/", bookValidation, bookControllers.createBook);
bookRouter.get("/:id", bookControllers.getByIdBook);
bookRouter.put("/:id", bookValidation, bookControllers.updateBook);
bookRouter.delete("/:id", bookControllers.deleteBook);

export { bookRouter };
