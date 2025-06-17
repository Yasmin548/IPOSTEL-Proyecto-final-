import express, { Request, Response } from "express"
import { cargoController } from "../controller/cargo.controller"
import { sendResponse } from "../utils/sendResponse.util"
import { TCargo } from "../types/index.types"
import { validateClass } from "../middlewares/validateClass.middleware"
import { createCargoDTO, updateCargoDTO } from "../DTO/cargo.dto"

export const cargoRouter = express.Router()

const controller = new cargoController

cargoRouter
//Obtiene todos los cargos
.get('/', async (req:Request, res:Response)=>{
   const page= req.query.page? Number(req.query.page) : 1
   const limit= req.query.page? Number(req.query.limit) : 10
   const response = await controller.cargoListController(page, limit)
   sendResponse(res, response)
})
//Crea un cargo
.post('/', validateClass(createCargoDTO), async (req:Request, res:Response)=>{
    const cargo : TCargo = req.body
    const response = await controller.createCargoController(cargo)
    sendResponse(res, response)
})
//Busca un cargo por id
.get('/:id', async(req:Request, res:Response)=>{
    const id = Number(req.params.id)
    const response= await controller.searchCargoByIDController(id)
    sendResponse(res, response)
})
//Busca un cargo por nombre
.get('/search/:nombre', async(req:Request, res:Response)=>{
    const nombre = String(req.params.nombre)
    const response = await controller.searchCargoByNameController(nombre)
    sendResponse(res, response)
})
//Actualiza un cargo
.put('/:id', validateClass(updateCargoDTO), async(req:Request, res:Response)=>{
    const id = Number(req.params.id)
    const cargo = req.body
    const response= await controller.updateCargoController(id, cargo)
    sendResponse(res, response)
})
//Elimina un cargo
.delete('/:id', async(req:Request, res:Response)=>{
    const id = Number(req.params.id)
    const response= await controller.deleteCargoController(id)
    sendResponse(res, response)
})