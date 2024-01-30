require("dotenv").config();
let express = require("express");
let app = express();

console.log("Hello World");

const pathToIndex = __dirname + "/views/index.html";

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(pathToIndex);
});

app.get("/json", function (req, res) {
  const msg =
    process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON" : "Hello json";
  res.json({ message: msg });
});

module.exports = app;
