import { IFunctionResponse, TEmpleado } from "../../types/index.types";

export interface IEmpleadoController{
    empleadoListController():Promise <IFunctionResponse<TEmpleado[] | null>>
}