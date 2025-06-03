import { createUserDTO } from "../DTO/user.dto";
import { registerUserService } from "../services/auth.service";
import { findUserByEmail } from "../services/user.service";
import { IFunctionResponse, TUsuario } from "../types/index.types";
import { safe } from "../wrapper/safe.wrapper";
import { IAuthController } from "./interface/index.interface";


export class AuthController implements IAuthController{
    public async createUserController(user: createUserDTO): Promise<IFunctionResponse<TUsuario>> {
        return safe(async()=>{
            const existingUser= await findUserByEmail(user.correo)
            if (existingUser){
                throw{
                    status:400,
                    message:`El correo ya está en uso`,
                    error:"Duplicado"
                }
            }
            return await registerUserService(user)
        },{
            successStatus:201,
            successMessage:"Usuario Registrado"   
        })
    }
}