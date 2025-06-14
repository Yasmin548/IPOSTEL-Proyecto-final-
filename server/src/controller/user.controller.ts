import { userListService } from "../services/user.service";
import { IFunctionResponse, TUsuario } from "../types/index.types";
import { safe } from "../wrapper/safe.wrapper";
import { IUserController } from "./interface/index.interface";


export class UserController implements IUserController{
    public async userListController(): Promise<IFunctionResponse<TUsuario[] | null>> {
        return safe(async()=>{
            const users = await userListService()
            if(!users){
                throw{
                    status:404,
                    message:"No hay usuarios registrados",
                    error:"No content"
                }
            }

            return users
        })
    }
}