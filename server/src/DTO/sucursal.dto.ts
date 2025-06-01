import { IsNotEmpty, IsString } from "class-validator";


export class createSucursalDTO{
    @IsString()
    @IsNotEmpty({message:`El rif de la sucursal es obligatorio`})
    rif!:string;

    @IsString()
    @IsNotEmpty({message:`El estado de la sucursal es obligatorio`})
    estado!: string

    @IsString()
    @IsNotEmpty({message:`El municipio de la sucursal es obligatorio`})
    municipio!:string

    @IsString()
    @IsNotEmpty({message:`La parroquia de la sucursal es obligatorio`})
    parroquia!: string

    @IsString()
    @IsNotEmpty({message:`La dirección de la sucursal es obligatorio`})
    direccion!: string
}