import Prisma from "../config/prisma.config"
import { adminUpdateUserDTO, createUserDTO, logUserDTO, updateUserDTO } from "../DTO/user.dto"
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

export const updateUserService = async (correo:string, userData:updateUserDTO)=>{
    const updatedHashedPassword = await hashPassword(userData.password)
    const userUpdated = await Prisma.usuario.update({
        where:{correo:correo},
        data:{password:updatedHashedPassword}
    })

    return userUpdated
}

export const updateUserInfo = async(correo:string, userData:adminUpdateUserDTO)=>{
    const userUpdated = await Prisma.usuario.update({
        where:{correo:correo},
        data:userData
    })
    return userUpdated
}