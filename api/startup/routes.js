const express = require("express");
const quizzes = require("../routes/quizzes");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    next();
  });
  app.use(express.json());
  app.use("/api/quiz", quizzes);
};
