import express from "express";
import empleadoController from "../controller/employee/empleado.controller";

const empleadoRouter = express.Router();

const controller = new empleadoController()
empleadoRouter.get("/", controller.empleadoListController());

export default empleadoRouter;
