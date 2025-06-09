import express, { Request, Response } from "express";
import { EmpleadoController } from "../controller/empleado.controller";
import { sendResponse } from "../utils/sendResponse.util";
import { validateClass } from "../middlewares/validateClass.middleware";
import { createEmpleadoDTO, updateEmpleadoDTO } from "../DTO/empleado.dto";


const empleadoRouter = express.Router();

const controller = new EmpleadoController

empleadoRouter
.get("/", async(req:Request, res: Response)=>{
    // Si hay parámetros de paginación, usar la versión paginada
    if (req.query.page || req.query.limit) {
        const response = await controller.empleadoListPaginatedController(req);
        sendResponse(res, response);
    } else {
        const response = await controller.empleadoListController();
        sendResponse(res, response);
    }
})
.get("/paginated", async(req:Request, res: Response)=>{
    const response = await controller.empleadoListPaginatedController(req);
    sendResponse(res, response);
})
.get("/:dni", async(req:Request, res:Response)=>{
    const dni = req.params.dni
    const response = await controller.searchEmpleadoByIDController(dni)
    sendResponse(res, response)
})
.post("/", validateClass(createEmpleadoDTO), async(req:Request, res:Response)=>{
    const empleado:createEmpleadoDTO = req.body
    const response= await controller.createEmpleadoController(empleado)
    sendResponse(res, response)
})
.put("/:dni", validateClass(updateEmpleadoDTO), async(req:Request, res:Response)=>{
    const dni = req.params.dni
    const empleado:updateEmpleadoDTO = req.body
    const response= await controller.updateEmpleadoController(dni, empleado)
    sendResponse(res, response)
})
.delete("/:dni", async(req:Request, res:Response)=>{
    const dni = req.params.dni
    const response = await controller.deleteEmpleadoController(dni)
    sendResponse(res, response)
})

export default empleadoRouter;
