import Prisma from "../config/prisma.config"
import { createUserDTO, logUserDTO } from "../DTO/user.dto"
import { hashPassword } from "../utils/hash.utils"


export const registerUserService= async(user:createUserDTO)=>{
    const hashedPassword= await hashPassword(user.password)

    const userData= await Prisma.usuario.create({
        data:{
            ...user,
            password:hashedPassword
        }
        
    })

    return userData;
}

export const loginUserService = async (loginData: logUserDTO)=>{
    const user= await Prisma.usuario.findUnique({
        where:{correo: loginData.correo}
    })
    return user
}