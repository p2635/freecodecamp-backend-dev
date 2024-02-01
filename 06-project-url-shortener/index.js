require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({ url: { type: String, unique: true } });
const Url = mongoose.model("Url", urlSchema);

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

const connectToMongo = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");
};
connectToMongo();

const createAndSaveUrl = (newURL, done) => {
  const document = new Url({ url: newURL });
  async () => {
    await document.save();
  };
  console.log(`New document created for url ${newURL}.`);
  done(null, newURL);
};

const findUrlByShortUrl = (url, done) => {
  // To implement
};

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
