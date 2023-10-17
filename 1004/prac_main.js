const express = require("express");

const app = express();
let port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(port, "localhost", () => {
  console.log("Server is running on port");
});
