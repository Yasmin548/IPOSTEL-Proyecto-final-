import Prisma from "../config/prisma.config"


export const userListService= async()=>{
    const userData = await Prisma.usuario.findMany()
    return userData.length>0? userData : null
}

export const findUserByEmail = async(correo:string)=>{
    const userData= await Prisma.usuario.findUnique({
        where:{correo: correo}
    })
    return userData? userData : null
}