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
        const token = req.cookies['Acces-Token']

        if(!token){
            throw res.status(400).json({message:"No se ha podido obtener el token"})
        }

        const data = verifyData(token)

        req.user= data
    } catch (error) {
        console.error('Error en validacion de token:', error)
        res.status(401).json({
            status:401,
            message:"No autenticado",
            error:"Unathorized"
            
        })
    }

    next()
}

export const permisologia= (rol:string)=>{
    return (req:Request, res:Response, next:NextFunction)=>{
        const user= req.user

        if(!user){
            return res.status(401).json({ 
            status:401,
            message:"No autenticado",
            error:"Unathorized "})
        }

        if(user?.rol!==rol){
            return res.status(403).json({ 
            status:403,
            message:"Forbidden",
            error:"Se requiere un rol mayor"})
        }

        next()
    }
}