import Prisma from "../config/prisma.config";
import { messageListService } from "../services/mensajes.service";
import { IFunctionResponse, TMessage, IPagination } from "../types/index.types";
import { safe } from "../wrapper/safe.wrapper";
import { IMessageController } from "./interface/index.interface";


export class MessageController implements IMessageController{
    public async messageListController(page: number, limit: number): Promise<IFunctionResponse<{messages:TMessage[], Pagination:IPagination}>> {
        return safe(async()=>{
            const data= await messageListService(page, limit)
            if(data.pagination.total==0){
                throw{
                    status:404,
                    message:"No hay mensajes",
                    error:"No content"
                }
            }
            const messages= data.data
            const Pagination = data.pagination
            console.log(Pagination)
            return {messages, Pagination}
        },{
            successStatus:200,
            successMessage:"Lista de mensajes"
        })
    }
}


export const createMessage= async(message:any)=>{
    const newMessage = await Prisma.mensaje.create({
        data:message
    })
    return newMessage
}