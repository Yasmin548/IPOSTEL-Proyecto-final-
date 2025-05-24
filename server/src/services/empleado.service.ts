import Prisma from "../config/prisma.config"


export const empleadoListService = async ()=>{
    const empleadosData = await Prisma.empleado.findMany()
    return empleadosData.length>0? empleadosData : null
}