import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import findUp from "find-up";
// dotenv.config({ path: findUp.sync(".env") });
// dotenv.config({path: path.join('', '..', '.env')});
// dotenv.config({ path: ".config/" + ".env" });
// const dotenv = require("dotenv").config();
import userRouter from "./routes/router.js";
import errorHandler from "./middleware/errorhandler.js";
// const { errorhandler } = require("./middleware/errorhandler.js");
// import { getgoals } from "./routes/router.js";
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
dotenv.config();
// app.use(dotenv.config());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use("/api/goals", userRouter);
app.use(errorHandler);
console.log(process.env.NODE_ENV === "pro");
app.listen(port, () =>
  console.log(`Server started on port: http://localhost:${port}`)
);
