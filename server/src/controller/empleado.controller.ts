import { createEmpleadoDTO, updateEmpleadoDTO } from "../DTO/empleado.dto";
import { createEmpleadoService, empleadoListService, searchEmpleadoByIDService, updateEmpleadoService } from "../services/empleado.service";
import { IFunctionResponse, TEmpleado } from "../types/index.types";
import { safe } from "../wrapper/safe.wrapper";
import { IEmpleadoController } from "./interface/index.interface";


export class EmpleadoController implements IEmpleadoController{

  public async empleadoListController(): Promise<IFunctionResponse<TEmpleado[] | null>> {
  return safe(
      async () => {
        return await empleadoListService();
      },
      {
        successStatus: 201,
        successMessage: 'Lista de Empleados',
      },
    );
  }

  public async searchEmpleadoByIDController(dni: string): Promise<IFunctionResponse<TEmpleado | null>> {
    return safe(async ()=>{
      const empleado = await searchEmpleadoByIDService(dni)

      if(!empleado){
        throw{
          status:404,
          message:"No existe el empleado",
          error:"Not found"
        }
      }
      return empleado
    },{
      successStatus:200,
      successMessage:"Empleado encontrado"
    })
  }

  public async createEmpleadoController(empleado: createEmpleadoDTO): Promise<IFunctionResponse<TEmpleado>> {
    return safe(async()=>{
      const existingEmpleado = await searchEmpleadoByIDService(empleado.dni)

      if(existingEmpleado){
        throw{
          status:400,
          message:"Ya existe el empleado",
          error:"Duplicated"
        }
      }

      return await createEmpleadoService(empleado)
    },{
      successStatus:201,
      successMessage:"Empleado creado Correctamente"
    })
  }

  public async updateEmpleadoController(dni:string, empleado: updateEmpleadoDTO): Promise<IFunctionResponse<TEmpleado>> {
    return safe(async()=>{
      const existingEmpleado = await searchEmpleadoByIDService(dni)

      if (!existingEmpleado){
        throw{
          status:404,
          message:"No se encontró el empleado",
          error:"Not found"
        }
      }

      return await updateEmpleadoService(dni, empleado)

    },{
      successStatus:202,
      successMessage:"Empleado actualizado"
    })
  }
}