import { UserController } from "../controller/user.controller";
import express, { Request, Response } from "express"
import { sendResponse } from "../utils/sendResponse.util";
import { adminUpdateUserDTO } from "../DTO/user.dto";
import { validateClass } from "../middlewares/validateClass.middleware";

const controller = new UserController()
const userRouter = express.Router()

userRouter.get("/", async(req:Request, res:Response)=>{
    const page= req.query.page? Number(req.query.page) : 1
    const limit = req.query.limit? Number(req.query.limit) : 10
    const response = await controller.userListController(page, limit)
    sendResponse(res, response)
})
.get("/:correo", async(req:Request, res:Response)=>{
    const correo = req.params.correo
    const response = await controller.searchUserByEmailController(correo)
    sendResponse(res, response)
})
.put("/:correo", validateClass(adminUpdateUserDTO), async(req:Request, res:Response)=>{
    const correo = req.params.correo
    const userData:adminUpdateUserDTO = req.body
    const response = await controller.updateUserInfoController(correo, userData) 
    sendResponse(res, response)
})

export default userRouter