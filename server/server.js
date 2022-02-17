const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
