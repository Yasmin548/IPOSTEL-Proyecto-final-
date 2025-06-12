import { createUserDTO, logUserDTO, updateUserDTO } from "../DTO/user.dto";
import { registerUserService, updateUserService } from "../services/auth.service";
import { findUserByEmail } from "../services/user.service";
import { IFunctionResponse, TUsuario } from "../types/index.types";
import { comparePassword } from "../utils/hash.utils";
import { Token } from "../utils/jwt.utils";
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

    public async loginUserController(loginData: logUserDTO): Promise<IFunctionResponse<{ user: Partial<TUsuario>; token:string }>> {
        return safe(async()=>{
            const existingUser = await findUserByEmail(loginData.correo)
            if(!existingUser){
                throw{
                    status:404,
                    message:"El usuario no existe",
                    error:"Not found"
                }
            }

            const pass = await comparePassword( loginData.password, existingUser.password)
            
            if(!pass){
                throw{
                    status:400,
                    message:"La contraseña no coincide",
                    error:"Unathorized"
                }
            }

            const token=  Token({
                user:existingUser.nombre,
                email:existingUser.correo,
                rol:existingUser.rol
            })

            const publicUser: Partial<TUsuario> = {
                correo: existingUser.correo,
                rol: existingUser.rol
            }

            return {user: publicUser, token:token}


        },{
            successStatus:200,
            successMessage:"Ingreso correcto"
        })
    }

    public async updatePasswordController(correo: string, userData: updateUserDTO): Promise<IFunctionResponse<TUsuario>> {
        return safe(async()=>{
            const existingUser= await findUserByEmail(correo)
            if(!existingUser){
                throw{
                    status:404,
                    message:"El usuario no existe",
                    error:"Not found"
                }
            }

            return await updateUserService(correo, userData)
        })
    }
}