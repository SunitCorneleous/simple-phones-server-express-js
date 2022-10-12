const express = require("express");
const app = express();
const port = 5000;
const phones = require("./phones.json");

app.get("/", (req, res) => {
  res.send("I am working");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.listen(port, () => {
  console.log(`This server is listening on port ${port}`);
});
