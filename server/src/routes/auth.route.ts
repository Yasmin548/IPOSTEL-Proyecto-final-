import express, { Request, Response } from "express"
import { AuthController } from "../controller/auth.controller"
import { validateClass } from "../middlewares/validateClass.middleware"
import { createUserDTO, logUserDTO, updateUserDTO } from "../DTO/user.dto"
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
    
    /*const cookieConfig={
        httpOnly: true,//Hace que la cookie sólo se acceda desde el server
        sameSite: "strict",//Cookie sólo se accede desde el mismo dominio
        // maxAge:1000*60*60 Le da tiempo a la cookie pero ya se lo di al token
    }*/

    //Generamos la cookie
    if(response.data?.token){
        res.cookie("Acces-Token", response.data.token, {
            httpOnly: true,
            sameSite: "strict",
        })
    }
    sendResponse(res, response)
})
.put('/password', validateClass(updateUserDTO), async (req:Request, res:Response)=>{
    const correo= String(req.user?.email)
    const newPassword = req.body
    const response = await controller.updatePasswordController(correo, newPassword)
    sendResponse(res, response)
})

export default authRouter