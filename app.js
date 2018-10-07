require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const logger = require("morgan");
const path = require("path");
const mongoose = require('./lib/mongoose');
const index = require("./routes/index");
const login = require("./routes/login");
const movies = require("./routes/movies");
const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);
const app = express();
require('./express')(app);

app.use("/", index);
app.use("/login", login);
app.use("/movies", movies);

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);
app.use((req, res, next) => {
  res.status(404);
  res.render("not-found");
});
app.use((err, req, res, next) => {
  // always log the error
  console.error("ERROR", req.method, req.path, err);
  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.render("error");
  }
});

module.exports = app;
