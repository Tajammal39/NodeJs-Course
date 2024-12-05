const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter = require("./routers/authRouter");
const productRouter = require("./routers/productRouter");
require("dotenv").config();
require("./model/index");

const PORT = process.env.PORT || 8080;

app.use(express.json()); // To parse JSON bodies
app.use(cors());
app.use("/auth", authRouter);
app.use("/product", productRouter);

app.listen(PORT, () => {
  console.log(`server is runnings on Port: ${PORT}`);
});
