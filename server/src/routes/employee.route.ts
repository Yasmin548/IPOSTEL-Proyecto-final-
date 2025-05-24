import express from "express";
import employeeList from "../controller/employee/List.controller";

const empleadoRouter = express.Router();

empleadoRouter.get("/", employeeList);

export default empleadoRouter;
