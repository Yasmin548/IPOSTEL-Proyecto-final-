import Prisma from "../config/prisma.config"
import { createCargoDTO, updateCargoDTO } from "../DTO/cargo.dto"
import { TCargo } from "../types/index.types"


export const cargoListService = async () =>{
    const cargosData = await Prisma.cargo.findMany()
    return cargosData.length>0? cargosData : null
}

export const cargoListPaginatedService = async (page: number = 1, limit: number = 10) => {
    const skip = (page - 1) * limit;
    
    // Obtener el total de registros
    const total = await Prisma.cargo.count();
    
    // Obtener los cargos paginados
    const cargos = await Prisma.cargo.findMany({
        skip,
        take: limit
    });
    
    // Calcular información de paginación
    const totalPages = Math.ceil(total / limit);
    
    return {
        data: cargos,
        pagination: {
            total,
            page,
            limit,
            totalPages,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1
        }
    };
}

export const createCargoService = async (cargo:createCargoDTO)=>{
    const cargoData = await Prisma.cargo.create({
        data: cargo
    })
    return cargoData
}


export const findCargoByIDService = async (id:number)=>{
    const cargoData = await Prisma.cargo.findUnique({
        where:{ id : id}
    })
    return cargoData
}


export const findCargoByNameService = async (nombre : string)=>{
    const cargoData = await Prisma.cargo.findFirst({
        where:{ nombre : nombre}
    })

    return cargoData;
}

export const updateCargoService = async( id:number, cargo: updateCargoDTO)=>{
     const cargoData = await Prisma.cargo.update({
        where:{id:id},
        data:cargo
     })
    return cargoData
}

export const deleteCargoService = async(id:number)=>{
    await Prisma.cargo.delete({
        where:{id:id}
    })
    return null
}