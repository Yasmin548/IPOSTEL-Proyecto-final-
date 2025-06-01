import Prisma from "../config/prisma.config"
import { createCargoDTO } from "../DTO/cargo.dto"
import { createSucursalDTO } from "../DTO/sucursal.dto"


export const sucursalListService = async ()=>{
    const sucursalData = await Prisma.sucursal.findMany()
    return sucursalData.length>0? sucursalData : null
}

export const findSucursalByID= async (rif: string)=>{
    const sucursalData= await Prisma.sucursal.findUnique({
        where:{rif:rif}
    })
    return sucursalData
}

export const createSucursalService = async (sucursal:createSucursalDTO)=>{
    const sucursalData = await Prisma.sucursal.create({
        data:sucursal
    })
    return sucursalData
}

