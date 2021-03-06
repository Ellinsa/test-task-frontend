//jshint esversion
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("home", { username: "" });
});

app.get("/:id", function (req, res) {
  var id = req.params.id;
  res.render("home", { username: id });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started!");
});
