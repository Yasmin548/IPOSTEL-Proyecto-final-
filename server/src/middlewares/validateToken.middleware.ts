import { NextFunction, Request, Response } from "express";
import { verifyData } from "../utils/jwt.utils";

declare module "express-serve-static-core"{
    interface Request{
        user?:{
            user: string;
            email: string;
            rol: string;
        }
    }
}

export const verifyUser = (req:Request, res:Response, next:NextFunction)=>{
    try {
        const token = req.cookies?.token

        if(!token){
            return res.status(400).json({message:"No se ha podido obtener el token"})
        }

        const data = verifyData(token)

        req.user= data
    } catch (error) {
        console.error('Error en validacion de token:', error)

        res.clearCookie("Acces-token",{
            httpOnly: true,
            sameSite: "strict",
        })
    }

    next()
}