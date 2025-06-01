import Prisma from "../config/prisma.config"
import { createCargoDTO } from "../DTO/cargo.dto"
import { createSucursalDTO, updateSucursalDTO } from "../DTO/sucursal.dto"


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

export const updateSucursalService = async (rif:string, sucursal:updateSucursalDTO)=>{
    const updatedSucursal = await Prisma.sucursal.update({
        where:{rif:rif},
        data:sucursal
    })
    return updatedSucursal
}

export const deleteSucursalService = async (rif:string)=>{
    await Prisma.sucursal.delete({
        where:{rif:rif}
    })
    return null
}