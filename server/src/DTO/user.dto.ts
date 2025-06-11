import { IsEmail, IsIn, IsNotEmpty, IsString } from "class-validator"

export class createUserDTO{
  
    @IsNotEmpty({message:"El correo es obligatorio"})
    @IsEmail()
    correo!:     string

    @IsNotEmpty({message: `El nombre es obligatorio`})
    @IsString()
    nombre!:     string

    @IsNotEmpty({message:"El apellido es obligatorio"})
    @IsString()
    apellido!:   string

    @IsNotEmpty({message:"La contraseña es obligatoria"})
    @IsString()
    password!: string

    @IsIn([`CLIENTE`,`EMPLEADO`, `ADMIN`])
    rol!: `CLIENTE`|`EMPLEADO`| `ADMIN`
}

export class logUserDTO{
    @IsNotEmpty({message:"El correo es obligatorio"})
    @IsEmail()
    correo!: string

    @IsNotEmpty({message:"La contraseña es obligatoria"})
    @IsString()
    password!: string
}


export class updateUserDTO{
    @IsString()
    password!: string
}

export class adminUpdateUserDTO{
    @IsEmail()
    correo!:     string

    
    @IsString()
    nombre!:     string

    @IsString()
    apellido!:   string

    @IsIn([`CLIENTE`,`EMPLEADO`, `ADMIN`])
    rol!: `CLIENTE`|`EMPLEADO`| `ADMIN`
}