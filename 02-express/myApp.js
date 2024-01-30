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
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

module.exports = app;
