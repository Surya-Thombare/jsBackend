import * as dotenv from "dotenv";
// require("dotenv").config();
import connectDB from "./db/index.js";

dotenv.config();
// dotenv.config({
//   path: "./env",
// });

connectDB();
