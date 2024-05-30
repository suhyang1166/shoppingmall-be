const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv").config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //req.body가 객체로 인식이 됩니다

const mongoURI = process.env.LOCAL_DB_ADDRESS;
mongoose
  .connect(mongoURI, { userNewUrlParser: true })
  .then(() => console.log("mongoose connnected"))
  .catch((err) => console.log("DB connection fail", err));

app.listen(process.env.PORT || 5000, () => {
  console.log("server on");
});
