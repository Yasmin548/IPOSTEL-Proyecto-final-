import { error } from "console";
import { createMessageDto } from "../DTO/mensajes.dto";
import { createMessageService, findMessagesByEmail, messageListService } from "../services/mensajes.service";
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

    public async createMessageController(message: createMessageDto): Promise<IFunctionResponse<TMessage>> {
        return safe(async()=>{
            if(!message){
                throw{
                    status:400,
                    message:"Busqueda vacía",
                    error:"Bad Request"
                }
            }
            return await createMessageService(message)
        },{
            successStatus:201,
            successMessage:"Mensaje Enviado correctamente"
        })
    }

    public async searchMessagesByEmail(correo: string): Promise<IFunctionResponse<{ messages: TMessage[]; }>> {
        return safe(async()=>{

            if (!correo) {
                    throw{
                        status: 400,
                        message: "Parámetro 'correo' requerido",
                        error:"Bad Request"
                    };
                }
             

            const messages = await findMessagesByEmail(correo)
            if(!messages){
                throw{
                    status:404,
                    message:"No hay mensajes con ese Correo",
                    error:"No content"
                }
            }

            return {messages}
        },{
            successStatus:200,
            successMessage:`Mensajes de: ${correo}` 
        })
    }
}


