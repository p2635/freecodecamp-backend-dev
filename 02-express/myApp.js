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

// Chain Middleware to Create a Time Server
app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get("/", function (req, res) {
  res.sendFile(pathToIndex);
});

app.get("/json", function (req, res) {
  const greeting =
    process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
  res.json({ message: greeting });
});

module.exports = app;
