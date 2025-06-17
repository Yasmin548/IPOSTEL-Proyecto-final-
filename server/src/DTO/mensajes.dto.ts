import { IsEmail, IsNotEmpty, IsString } from "class-validator"


export class createMessageDto{
    @IsEmail()
    @IsNotEmpty({message:"El correo no puede estar vacío"})
    correo!: string  
    @IsString()
    @IsNotEmpty({message:"Nombre obligatorio"})
    nombre!: string

    @IsString()
    asunto!: string
    @IsString()
    @IsNotEmpty({message:"Es necesario un mensaje"})
    mensaje!: string
}