import express, { Request, Response } from "express";
import { EmpleadoController } from "../controller/empleado.controller";
import { sendResponse } from "../utils/sendResponse.util";


const empleadoRouter = express.Router();

const controller = new EmpleadoController

empleadoRouter
.get("/", async(req:Request, res: Response)=>{
    const response= await controller.empleadoListController()
    sendResponse(res, response)
});

export default empleadoRouter;
