require("dotenv").config();
let express = require("express");
let app = express();

console.log("Hello World");

const pathToIndex = __dirname + "/views/index.html";

// Middleware
app.use("/public", express.static(__dirname + "/public"));
app.use("/", function (req, res, next) {
  logMessage = `${req.method} ${req.path} - ${req.ip}`;
  console.log(logMessage);
  next();
});

app.get("/", function (req, res, next) {
  res.sendFile(pathToIndex);
});

app.get("/json", function (req, res) {
  const greeting =
    process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
  res.json({ message: greeting });
});

module.exports = app;
