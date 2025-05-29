import { IHttpError } from "../types/httpError.type";


/**
 * Envoltorio reutilizable para funciones asincrónicas que maneja errores y estandariza la respuesta.
 * 
 * @param fn - Función asincrónica que se ejecutará de forma segura.
 * @param options - Opciones para personalizar la respuesta en caso de éxito.
 * @returns Objeto con { status, message, data?, error? } dependiendo del resultado.
 */
export async function safe<T>(
  fn: () => Promise<T>,
  options?: {
    successStatus?: number;
    successMessage?: string;
  }
): Promise<{
  status: number;
  message: string;
  data?: T;
  error?: unknown;
}> {
  try {
    const data = await fn();
    return {
      status: options?.successStatus || 200,
      message: options?.successMessage || "Operación exitosa",
      data,
    };
  } catch (error: unknown) {
    console.error("Error atrapado en safe():", error);

    const err = error as IHttpError;

    return {
      status: err.status || 500,
      message: err.message || "Error interno del servidor",
      error: err.error || error,
    };
  }
}
