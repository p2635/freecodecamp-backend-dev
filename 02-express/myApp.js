let express = require("express");
let app = express();

console.log("Hello World");

const pathToIndex = __dirname + "/views/index.html";

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(pathToIndex);
});

app.get("/json", function (req, res) {
  res.json({ message: "Hello json" });
});

module.exports = app;
