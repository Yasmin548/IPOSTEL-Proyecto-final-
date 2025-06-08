import Prisma from "../config/prisma.config"
import { createEmpleadoDTO, updateEmpleadoDTO } from "../DTO/empleado.dto"


export const empleadoListService = async ()=>{
        const empleadosData = await Prisma.empleado.findMany()
        return empleadosData.length>0? empleadosData : null
}   

export const createEmpleadoService = async(empleado:createEmpleadoDTO)=>{
        const empleadoData = await Prisma.empleado.create({
                data:empleado
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