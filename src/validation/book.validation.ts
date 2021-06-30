import { check, validationResult } from "express-validator";

const bookValidation = [
  check("name").trim().escape().not().isEmpty().withMessage("Book name can not be empty!").bail().isLength({ min: 3 }).withMessage("Minimum 3 characters required!").bail(),
  check("author").trim().escape().not().isEmpty().withMessage("Author name can not be empty!").bail().isLength({ min: 3 }).withMessage("Minimum 3 characters required!").bail(),
  check("title").trim().escape().not().isEmpty().withMessage("Book title can not be empty!").bail().isLength({ min: 3 }).withMessage("Minimum 3 characters required!").bail(),
  check("publisherName").trim().escape().not().isEmpty().withMessage("Publisher Name name can not be empty!").bail().isLength({ min: 3 }).withMessage("Minimum 3 characters required!").bail(),
  check("year").trim().escape().not().isEmpty().withMessage("Published year can not be empty!").bail().isLength({ min: 3 }).withMessage("Minimum 3 characters required!").bail(),
  (req:any, res:any, next:any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];
export {bookValidation};
