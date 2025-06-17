import { adminUpdateUserDTO } from "../DTO/user.dto";
import { updateUserInfoService } from "../services/auth.service";

import { findUserByEmail, userListService } from "../services/user.service";
import { IFunctionResponse, IPagination, TUsuario } from "../types/index.types";
import { safe } from "../wrapper/safe.wrapper";
import { IUserController } from "./interface/index.interface";


export class UserController implements IUserController{
    public async userListController(page:number, limit:number): Promise<IFunctionResponse<{users:TUsuario[], pagination:IPagination}>> {
        return safe(async()=>{
            const users = await userListService(page, limit)
            if(!users){
                throw{
                    status:404,
                    message:"No hay usuarios registrados",
                    error:"No content"
                }
            }

            return {users:users.data, pagination:users.pagination}
        },{
            successStatus:200,
            successMessage:"Lista de Usuarios"
        })
    }

    public async searchUserByEmailController(correo: string): Promise<IFunctionResponse<TUsuario | null>> {
        return safe(async()=>{
            const user = await findUserByEmail(correo)
            if(!user){
                 throw{
                    status:404,
                    message:"El usuario no se encuentra Registrado",
                    error:"No content"
                }
            }

            return user
        },{
            successStatus:200,
            successMessage:"Usuario encontrado"
        })
    }

    public async updateUserInfoController(correo: string, userData: adminUpdateUserDTO): Promise<IFunctionResponse<TUsuario>> {
        return safe(async() =>{const user = await findUserByEmail(correo)
        if(!user){
            throw{
                status:404,
                message:"El usuario no se encuentra Registrado",
                error:"No content"
            }
        }

        const userUpdated = await updateUserInfoService(correo, userData) 
        return userUpdated
    },{
        successStatus:200,
        successMessage:"Usuario Actulizado Correctamente"
    })
    }
}