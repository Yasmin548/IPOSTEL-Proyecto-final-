import express, { Request, Response } from "express"
import { MessageController } from "../controller/mensajes.controller"
import { sendResponse } from "../utils/sendResponse.util"


const messageRouter = express.Router()
const controller = new MessageController()

messageRouter
.get("/",async(req:Request, res:Response)=>{
    const page= Number(req.query.page)
    const limit = Number(req.query.limit)
    const response = await controller.messageListController(page, limit)
    sendResponse(res, response)
})

export default messageRouter