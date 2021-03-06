var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// config import
import configSet from "./config/config";
global.config = configSet("development");

// mongoDB
import connectToDb from "./db/connect";

connectToDb();

// view engine setup
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// middleware
// app.use("/", require("./middlewares/testMiddleware"));
app.use("/", require("./middlewares/graphqlMiddleware"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// app.use("/test", require("./routes/test"));

// graphql
// express
// import { ApolloServer, gql } from "apollo-server-express";
// const typeDefs = gql`
//     type Query {
//         hello: String
//     }
// `;
// const resolvers = {
//     Query: {
//         hello: () => "Hello GraphQL"
//     }
// };
// const server = new ApolloServer({ typeDefs, resolvers });
// server.applyMiddleware({ app });
// express
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
