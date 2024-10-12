const express = require("express");
const userRouter = require("./routes/user");
const app = express();

const { connectMongoDb } = require("./connection/connection");

//connection
connectMongoDb("mongodb://localhost:27017/ecom")
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Middleware to parse JSON request body
app.use(express.urlencoded({ extends: false }));
// app.use(express.json());
app.use(userRouter);
app.listen(3000, () => console.log("Server started"));
