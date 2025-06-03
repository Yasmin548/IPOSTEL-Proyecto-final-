import express, { Request, Response } from "express"
import { AuthController } from "../controller/auth.controller"
import { validateClass } from "../middlewares/validateClass.middleware"
import { createUserDTO } from "../DTO/user.dto"
import { sendResponse } from "../utils/sendResponse.util"

const authRouter = express.Router()
const controller = new AuthController()

authRouter
.post('/',validateClass(createUserDTO), async(req:Request, res:Response)=>{
    const user = req.body
    const response = await controller.createUserController(user)
    sendResponse(res, response)
})

export default authRouter