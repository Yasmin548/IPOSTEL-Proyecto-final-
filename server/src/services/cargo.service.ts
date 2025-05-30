import Prisma from "../config/prisma.config"


export const cargoListService = async () =>{
    const cargosData = await Prisma.cargo.findMany()
    return cargosData.length>0? cargosData : null
}