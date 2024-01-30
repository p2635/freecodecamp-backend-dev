require("dotenv").config();
let express = require("express");
let app = express();

// Meet the Node console
console.log("Hello World");

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

// Serve an HTML File
const pathToIndex = __dirname + "/views/index.html";
app.get("/", function (req, res) {
  res.sendFile(pathToIndex);
});

// Use .env variables
app.get("/json", function (req, res) {
  const greeting =
    process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
  res.json({ message: greeting });
});

// Build an echo server with req params
app.get("/:word/echo", function (req, res) {
  res.json({ echo: req.params.word });
});

// Get params via a query string
app.get("/name", function (req, res) {
  res.json({ name: `${req.query.first} ${req.query.last}` });
});

module.exports = app;
