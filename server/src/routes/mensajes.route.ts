import express, { Request, Response } from "express"
import { MessageController } from "../controller/mensajes.controller"
import { sendResponse } from "../utils/sendResponse.util"


const messageRouter = express.Router()
const controller = new MessageController()

messageRouter
.get("/",async(req:Request, res:Response)=>{
    const page= req.query.page? Number(req.query.page) : 1 
    const limit = req.query.limit? Number(req.query.limit) : 10 
    const response = await controller.messageListController(page, limit)
    sendResponse(res, response)
})
.post("/", async(req:Request, res:Response)=>{
    const message = req.body
    const response = await controller.createMessageController(message)
    sendResponse(res, response)
})
.get("/search", async(req:Request, res:Response)=>{
    const correo = String(req.query.correo)
    const response= await controller.searchMessagesByEmail(correo)
    sendResponse(res, response)
})

export default messageRouter