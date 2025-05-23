const express = require("express")
const employeeList = require("../controller/employee/List.controller")

const employeeRouter = express.Router()

employeeRouter.get("/", employeeList)

module.exports = employeeRouter