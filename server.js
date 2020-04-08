
const express = require("express");
const mongo = require("mongodb");
const mongoose = require("mongoose");

// const cors = require("cors");

const api = require("./api/urlShortner");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
// Basic Configuration
require('dotenv').config()

const port = process.env.PORT || 3000;


mongoose.connect(
  process.env.URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
mongoose.connection.once("open", () => {
  console.log("Db Connection");
});
// app.use(cors());

app.use(cors());
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});


api(app);
app.listen(port, function() {
  console.log("Node.js listening "+port);
});
