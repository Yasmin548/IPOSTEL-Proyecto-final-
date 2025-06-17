import Prisma from "../config/prisma.config"
import { createEmpleadoDTO, updateEmpleadoDTO } from "../DTO/empleado.dto"


export const empleadoListService = async (page: number = 1, limit: number = 10) => {
    const skip = (page - 1) * limit;
    
    // Obtener el total de registros
    const total = await Prisma.empleado.count();
    
    // Obtener los empleados paginados
    const empleados = await Prisma.empleado.findMany({
        skip,
        take: limit,
        include: {
            cargo: true,
            sucursal: true
        }
    });
    
    // Calcular información de paginación
    const totalPages = Math.ceil(total / limit);
    
    return {
        data: empleados,
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

export const createEmpleadoService = async(empleado:createEmpleadoDTO)=>{
        const empleadoData = await Prisma.empleado.create({
                data:{
                   ...empleado,
                   fechaNacimiento: new Date(empleado.fechaNacimiento),
                   fechaIngreso:new Date(empleado.fechaIngreso)
                } 
        })

        return empleadoData
}

export const searchEmpleadoByIDService = async(dni:string)=>{
        const empleadoData= await Prisma.empleado.findFirst({
                where:{dni:dni}
        })
        return empleadoData
}

export const updateEmpleadoService = async(dni:string, empleado:updateEmpleadoDTO)=>{
        const empleadoUpdated = await Prisma.empleado.update({
                where:{dni: dni},
                data:empleado
        })
        return empleadoUpdated
}

export const deleteEmpleadoService = async(dni:string)=>{
        await Prisma.empleado.delete({
                where:{dni:dni}
        })
        return null;
}