const express = require("express");

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.send("Hola");
});

module.exports = indexRouter;
