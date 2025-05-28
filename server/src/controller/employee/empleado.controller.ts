import { empleadoListService } from "../../services/empleado.service";
import { IFunctionResponse, TEmpleado } from "../../types/index.types";
import { IEmpleadoController } from "../interface/index.interface";


export class EmpleadoController implements IEmpleadoController{

  public async empleadoListController(): Promise<IFunctionResponse<TEmpleado[] | null>> {
    try {
      const response = await empleadoListService()
      if(!response){
       return{
        status:204,
        message:"No hay empleados registrados"
       }
      }

      return{
        status:201,
        message:"Lista de Empleados Obtenida Correctamente",
        data: response
      }
      
    } catch (error) {
      console.error('Error en Get empleado List controller', error);
      return {
        status: 500,
        message: 'Error Obteniendo los Empleados',
        error: error instanceof Error ? error.message : 'Unknown error',
      }
    }
  }
}