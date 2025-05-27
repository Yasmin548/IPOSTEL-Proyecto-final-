import Prisma from "../config/prisma.config"


export const empleadoListService = async ()=>{
    try {
        const empleadosData = await Prisma.empleado.findMany()
        return empleadosData.length>0? empleadosData : null
    } catch (error) {
        console.error("Error on Empleado List Service: ", error)
        throw{
            status:500,
            message:"Internal server Error",
            error: error instanceof Error? error.message : "Unknown Error"
        }
    }       
}