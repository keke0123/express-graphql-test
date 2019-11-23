var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// config import
import configSet from "./config/config";
global.config = configSet("development");

// middleware
app.use("/", require("./middlewares/testMiddleware"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// app.use("/test", require("./routes/test"));

// graphql
import { graphql, buildSchema } from "graphql";
let schema = buildSchema(`
    type Query {
        hello: String
    }
`);
let root = { hello: () => "Hello QraphQL" };
graphql(schema, "{hello}", root).then(res => {
    console.log(res);
});
// graphql

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
