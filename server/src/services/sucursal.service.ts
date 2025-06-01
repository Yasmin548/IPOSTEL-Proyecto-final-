import Prisma from "../config/prisma.config"

export const sucursalListService = async ()=>{
    const sucursalData = await Prisma.sucursal.findMany()
    return sucursalData.length>0? sucursalData : null
}