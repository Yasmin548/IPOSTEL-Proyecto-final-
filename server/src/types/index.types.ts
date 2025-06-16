import { Cargo, Empleado, mensaje, Sucursal, Usuario } from "../../generated/prisma";


export type TEmpleado = Empleado
export type TUsuario = Usuario
export type TSucursal = Sucursal
export type TCargo = Cargo
export type TMessage = mensaje

// T es el parámetro que se le pasa a la función, en este caso la data
export interface IFunctionResponse<T> {
    status: number,
    message: string,
    error?: unknown,
    data?: T,
    token?: string
}