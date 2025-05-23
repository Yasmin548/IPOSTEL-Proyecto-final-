const express = require("express");
const employeeRouter = require("./employee.route");

const indexRouter = express.Router();

indexRouter.get("/", () => {});
indexRouter.use("/employee", employeeRouter)

module.exports = indexRouter;
