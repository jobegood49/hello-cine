const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const logger = require("morgan");
const path = require("path");

module.exports = function(app) {
  app.use(logger("dev")); // llgger
  app.use(bodyParser.json()); // body-parser
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser()); // cookies-parser
  app.set("views", path.join(__dirname, "views")); // setting views
  app.set("view engine", "hbs");
  app.use(express.static(path.join(__dirname, "public")));
  app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
};
