const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("Welcome to home route of nodejs /:)");
});

app.use((req, res, next) => {
  res.status(400).sendFile(__dirname + "/handle_inputs/404.html");
});

app.listen(3001, (req, res) => {
  console.log("Server started on port 3001");
});
