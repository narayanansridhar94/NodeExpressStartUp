import express from "express";
import * as dotenv from "dotenv";
import logger from "morgan";
import mongoose from "mongoose";
import { bookRouter } from "./routes/book.route";
import swaggerUI from 'swagger-ui-express';
const swaggerDocument = require('./swagger.json');

dotenv.config({ path: ".env" });

const dbURI: any = process.env.DB_URL;
mongoose
  .connect(dbURI.toString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error(`Database not connected: ${err}`);
  });

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


const options = {
  swaggerOptions: {
    validatorUrl: null
  }
};
app.set('baseUrl','/api/v1');

app.use("/api-docs", swaggerUI.serve,swaggerUI.setup(swaggerDocument, options))
app.use(app.get('baseUrl')+"/books", bookRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`);
});
