const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const phones = require("./phones.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("I am working");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const phone = phones.find(ph => ph.id === id) || {};

  res.send(phone);
});

app.listen(port, () => {
  console.log(`This server is listening on port ${port}`);
});
