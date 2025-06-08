import { IsDate, IsEmail, IsISO8601, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator"

export class createEmpleadoDTO{
    @IsString()
    @IsNotEmpty({message:"EL C.I es obligatorio"})
    dni!:             string 
    
    
    foto!:            string

    @IsString()
    @IsNotEmpty({message:"EL nombre es obligatorio"})
    nombre!:          string

    @IsString()
    @IsNotEmpty({message:"EL apellido es obligatorio"})
    apellido!:        string

    @IsISO8601()
    fechaNacimiento!: string

    @IsNumber()
    @IsPositive()
    edad!:            number

    @IsString()
    @IsNotEmpty({message:"EL sexo es obligatorio"})
    sexo!:            string    

    @IsString()
    @IsNotEmpty({message:"EL nivel de educación es obligatorio"})
    educacion!:       string
    
    @IsString()
    @IsNotEmpty({message:"EL teléfono es obligatorio"})
    telefono!:        string

    @IsString()
    @IsNotEmpty({message:"La dirección es obligatoria"})
    direccion!:       string

    @IsEmail()
    @IsNotEmpty({message:"El correo es obligatorio"})
    correo!:          string   

    @IsISO8601()
    fechaIngreso!:    string

    @IsNumber()
    @IsNotEmpty({message:"El cargo es obligatorio"})
    cargoId!:         number

    @IsString()
    @IsNotEmpty({message:"EL rif de su sucursal es obligatorio"})
    sucursalRif!:     string
}

export class updateEmpleadoDTO{
    @IsString()
    dni!:             string 
    
    @IsString()
    foto!:            string
    @IsString()
    nombre!:          string
    @IsString()
    apellido!:        string
    @IsDate()
    fechaNacimiento!: Date
    @IsNumber()
    edad!:            number
    @IsString()
    sexo!:            string    
    @IsString()
    educacion!:       string
    @IsString()
    telefono!:        string
    @IsString()
    direccion!:       string
    @IsEmail()
    correo!:          string   
    @IsISO8601()
    fechaIngreso!:    Date
    @IsNumber()
    cargoId!:         number
    @IsString()
    sucursalRif!:     string
}