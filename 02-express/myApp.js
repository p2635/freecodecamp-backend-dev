let express = require("express");
let app = express();

console.log("Hello World");

const pathToIndex = __dirname + "/views/index.html";

app.get("/", function (req, res) {
  //   res.sendFile(pathToIndex);
  res.send("Hello Express");
});

module.exports = app;
