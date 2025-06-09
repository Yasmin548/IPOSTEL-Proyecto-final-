import { createEmpleadoDTO, updateEmpleadoDTO } from "../DTO/empleado.dto";
import { createEmpleadoService, deleteEmpleadoService, empleadoListPaginatedService, empleadoListService, searchEmpleadoByIDService, updateEmpleadoService } from "../services/empleado.service";
import { IFunctionResponse, TEmpleado } from "../types/index.types";
import { safe } from "../wrapper/safe.wrapper";
import { IEmpleadoController } from "./interface/index.interface";
import { findSucursalByID } from "../services/sucursal.service";
import { findCargoByIDService } from "../services/cargo.service";


export class EmpleadoController implements IEmpleadoController{

  public async empleadoListController(): Promise<IFunctionResponse<TEmpleado[] | null>> {
    return safe(
      async () => {
        const empleados = await empleadoListService();
        if(!empleados){
          throw{
            status:404,
            message:"No hay empleados registrados",
            error:"No content"
          }
        }
        return empleados
      },
      {
        successStatus: 200,
        successMessage: 'Lista de Empleados',
      },
    );
  }

  public async empleadoListPaginatedController(req: any): Promise<IFunctionResponse<any>> {
    return safe(
      async () => {
        // Obtener parámetros de paginación de la query
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 10;
        
        // Obtener empleados paginados
        const result = await empleadoListPaginatedService(page, limit);
        
        if (!result.data || result.data.length === 0) {
          throw {
            status: 404,
            message: "No hay empleados registrados",
            error: "No content"
          }
        }
        
        return result;
      },
      {
        successStatus: 200,
        successMessage: 'Lista de Empleados Paginada',
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

      const existingSucursal = await findSucursalByID(empleado.sucursalRif)
      
      if(!existingSucursal){
        throw{
          status:400,
          message:"No existe la sucursal",
          error:"Not found"
        }
      }

      const existingCargo = await findCargoByIDService(empleado.cargoId)

      if(!existingCargo){
        throw{
          status:400,
          message:"No existe el cargo",
          error:"Not found"
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

  public async deleteEmpleadoController(dni: string): Promise<IFunctionResponse<null>> {
    return safe(async()=>{

      const existingEmpleado = await searchEmpleadoByIDService(dni)

      if(!existingEmpleado){
        throw{
          status:404,
          message:"No se encontró el empleado",
          error:"Not found"
        }
      }
      return await deleteEmpleadoService(dni)
    })
  }
}