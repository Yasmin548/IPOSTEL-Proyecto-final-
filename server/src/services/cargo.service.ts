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


export const findCargoByID = async (id:number)=>{
    const cargoData = await Prisma.cargo.findUnique({
        where:{ id : id}
    })
    return cargoData
}


export const findCargoByName = async (nombre : string)=>{
    const cargoData = await Prisma.cargo.findFirst({
        where:{ nombre : nombre}
    })

    return cargoData;
}