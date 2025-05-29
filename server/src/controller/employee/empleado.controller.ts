import { empleadoListService } from "../../services/empleado.service";
import { IFunctionResponse, TEmpleado } from "../../types/index.types";
import { safe } from "../../wrapper/safe.wrapper";
import { IEmpleadoController } from "../interface/index.interface";


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
}