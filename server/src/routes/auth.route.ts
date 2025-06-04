import express, { Request, Response } from "express"
import { AuthController } from "../controller/auth.controller"
import { validateClass } from "../middlewares/validateClass.middleware"
import { createUserDTO, logUserDTO } from "../DTO/user.dto"
import { sendResponse } from "../utils/sendResponse.util"

const authRouter = express.Router()
const controller = new AuthController()

authRouter
.post('/register',validateClass(createUserDTO), async(req:Request, res:Response)=>{
    const user = req.body
    const response = await controller.createUserController(user)
    sendResponse(res, response)
})
.post('/login', validateClass(logUserDTO), async(req:Request, res:Response)=>{
    const loginData = req.body
    const response = await controller.loginUserController(loginData)
    sendResponse(res, response)
})

export default authRouter