require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const port = parseInt(process.env.PORT);

app.use(cors());
mongoose
  .connect(process.env.DB_ADDRESS)
  .then(() => console.log("mongodb connect"))
  .catch((err) => console.log(err));

const db = mongoose.connection;

app.get("/cu", (req, res) => {
  res.send("Hello CU");
});

app.get("/gs25", (req, res) => {
  res.send("Hello Gs25");
});

app.get("/ministop", (req, res) => {
  res.send("Hello Ministop");
});

app.get("/7eleven", (req, res) => {
  res.send("Hello Seven Eleven");
});

app.get("/emart24", (req, res) => {
  res.send("Hello Emart24");
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
