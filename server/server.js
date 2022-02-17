const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/cu", (req, res) => {
  res.send("Hello CU");
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
