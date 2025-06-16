import Prisma from "../config/prisma.config";


export const messageListService = async(page:number, limit:number)=>{
    //calcula cuantos registros se va a saltar
    const skip = (page - 1) * limit;
    
    // Obtener el total de registros
    const total = await Prisma.mensaje.count();
    
    // Obtener las mensajes paginados
    const messages = await Prisma.mensaje.findMany({
        skip,
        take: limit,
        orderBy:{fecha:"desc"}
    });
    
    // Calcular información de paginación
    const totalPages = Math.ceil(total / limit);
    
    return {
        data: messages,
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

