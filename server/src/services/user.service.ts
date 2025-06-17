import Prisma from "../config/prisma.config"

export const userListService= async(page:number, limit:number)=>{
    const skip = (page-1)*limit

    const total = await Prisma.usuario.count()
    const users= await Prisma.usuario.findMany({
        skip, 
        take:limit
    })

    const totalPages= Math.ceil(total/limit)
    return{
        data:users,
        pagination:{
            total,
            page,
            limit,
            totalPages,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1
        }
    }
}

export const findUserByEmail = async(correo:string)=>{
    const userData= await Prisma.usuario.findUnique({
        where:{correo: correo}
    })
    return userData? userData : null
}

export const deleteUser= async (correo:string)=>{
    await Prisma.usuario.delete({
        where:{correo:correo}
    })

    return null
}