import Prisma from "../config/prisma.config"
import { createEmpleadoDTO } from "../DTO/empleado.dto"


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