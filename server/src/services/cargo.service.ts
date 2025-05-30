import Prisma from "../config/prisma.config"
import { TCargo } from "../types/index.types"


export const cargoListService = async () =>{
    const cargosData = await Prisma.cargo.findMany()
    return cargosData.length>0? cargosData : null
}

export const createCargoService = async (cargo:TCargo)=>{
    const cargoData = await Prisma.cargo.create({
        data: cargo
    })
    return cargoData
}

