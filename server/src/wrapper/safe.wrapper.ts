
/**
 * Envoltorio reutilizable para funciones asincrónicas que maneja errores y estandariza la respuesta.
 * 
 * @param fn - Función asincrónica que se ejecutará de forma segura.
 * @param options - Opciones para personalizar la respuesta en caso de éxito.
 * @returns Objeto con { status, message, data?, error? } dependiendo del resultado.
 */

import { IHttpError } from "../types/httpError.type"

export async function safe<T>(
    /*Parámetros */
    fn: ()=> Promise<T>, options?:{
    succesStatus?: number,
    succesMessage?: string
    }
):Promise <{
    status: number,
    message: string,
    data?: T,
    error?: unknown
}> {
    try {
        const data = await fn()
        return {
            status: options?.succesStatus || 200,
            message: options?.succesMessage || "Operación exitosa",
            data,
        }
    } catch (error) {
        console.error("Error catch on safe(): ", error)

        const e = error as IHttpError
        return{
            status: e.status || 500,
            message: e.message || "Internal Server Error",
            error: e.error || error
        }
    }
}