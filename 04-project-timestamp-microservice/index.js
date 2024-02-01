// index.js
// where your node app starts
require("dotenv").config();

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// API route if user has provided no date
app.get("/api/", function (req, res) {
  // to be implemented
});

// API route if user has provided a date
app.get("/api/:date", function (req, res) {
  const dayjs = require("dayjs");
  let date = req.params.date;

  // If input is all numbers then it's likely to be a unix timestamp.
  // dayjs requires unix timestamp to be a number to parse.
  date = dayjs(/^\d+$/.test(date) ? parseInt(date) : date);

  if (date.isValid()) {
    res.json({
      unix: date.valueOf(),
      utc: new Date(date).toUTCString(),
    });
  } else {
    res.json({ error: "Invalid Date" });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
