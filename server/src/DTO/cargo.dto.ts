import { IsNotEmpty, IsString } from "class-validator";

export class createCargoDTO{
    @IsString()
    @IsNotEmpty({message:"El nombre es requerido"})
    nombre!: string
    
    @IsString()
    @IsNotEmpty({message:"El nombre es requerido"})
    departamento!: string
}

export class updateCargoDTO{
    @IsString()
    nombre!: string
    
    @IsString()
    departamento!: string
}