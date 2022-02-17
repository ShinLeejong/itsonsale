const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db.js");
const app = express();

const port = 8080;

app.use(cors());
db();

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
