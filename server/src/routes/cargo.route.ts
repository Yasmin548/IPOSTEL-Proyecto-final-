import express, { Request, Response } from "express"
import { cargoController } from "../controller/cargo/cargo.controller"
import { sendResponse } from "../utils/sendResponse.util"
import { TCargo } from "../types/index.types"

export const cargoRouter = express.Router()

const controller = new cargoController

cargoRouter
.get('/', async (req:Request, res:Response)=>{
    const response = await controller.cargoListController()
    sendResponse(res, response)
})
.post('/', async (req:Request, res:Response)=>{
    const cargo : TCargo = req.body
    const response = await controller.createCargoController(cargo)
    sendResponse(res, response)
})