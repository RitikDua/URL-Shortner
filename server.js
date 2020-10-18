

var express = require("express");
var mongo = require("mongodb");
var mongoose = require("mongoose");

// var cors = require("cors");

var api = require("./api/urlShortner");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
require("dotenv").config();

// Basic Configuration
var port = process.env.PORT || 3000;

/** this project needs a db !! **/

mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
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
/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function(req, res) {
  res.json({ greeting: "hello API" });
});

api(app);
app.listen(port, function() {
  console.log("Node.js listening ...");
});
