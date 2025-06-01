import express, { Request, Response } from "express"
import { cargoController } from "../controller/cargo/cargo.controller"
import { sendResponse } from "../utils/sendResponse.util"
import { TCargo } from "../types/index.types"
import { validateClass } from "../middlewares/validateClass.middleware"
import { createCargoDTO, updateCargoDTO } from "../DTO/cargo.dto"

export const cargoRouter = express.Router()

const controller = new cargoController

cargoRouter
.get('/', async (req:Request, res:Response)=>{
    const response = await controller.cargoListController()
    sendResponse(res, response)
})
.post('/', validateClass(createCargoDTO), async (req:Request, res:Response)=>{
    const cargo : TCargo = req.body
    const response = await controller.createCargoController(cargo)
    sendResponse(res, response)
})
.get('/:id', async(req:Request, res:Response)=>{
    const id = Number(req.params.id)
    const response= await controller.searchCargoByIDController(id)
    sendResponse(res, response)
})
.get('/search/:nombre', async(req:Request, res:Response)=>{
    const nombre = String(req.params.nombre)
    const response = await controller.searchCargoByNameController(nombre)
    sendResponse(res, response)
})
.put('/:id', validateClass(updateCargoDTO), async(req:Request, res:Response)=>{
    const id = Number(req.params.id)
    const cargo = req.body
    const response= await controller.updateCargoController(id, cargo)
    sendResponse(res, response)
})
.delete('/:id', async(req:Request, res:Response)=>{
    const id = Number(req.params.id)
    const response= await controller.deleteCargoController(id)
    sendResponse(res, response)
})