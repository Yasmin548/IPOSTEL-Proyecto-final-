import { IFunctionResponse, TCargo, TEmpleado } from "../../types/index.types";

export interface IEmpleadoController{
    empleadoListController():Promise <IFunctionResponse<TEmpleado[] | null>>
}

export interface ICargoController{
    cargoListController():Promise <IFunctionResponse<TCargo[] | null>>
    createCargoController(cargo:TCargo):Promise<IFunctionResponse<TCargo>>
}