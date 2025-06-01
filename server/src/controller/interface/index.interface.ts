import { createCargoDTO, updateCargoDTO } from "../../DTO/cargo.dto";
import { IFunctionResponse, TCargo, TEmpleado } from "../../types/index.types";

export interface IEmpleadoController{
    empleadoListController():Promise <IFunctionResponse<TEmpleado[] | null>>
}

export interface ICargoController{
    cargoListController():Promise <IFunctionResponse<TCargo[] | null>>
    createCargoController(cargo:createCargoDTO):Promise<IFunctionResponse<TCargo>>
    searchCargoByIDController(id:number):Promise<IFunctionResponse<TCargo | null>>
    searchCargoByNameController(name:string):Promise<IFunctionResponse<TCargo | null>>
    updateCargoController(id:number, cargo:updateCargoDTO):Promise<IFunctionResponse<TCargo>>
    deleteCargoController(id:number):Promise<IFunctionResponse<null>>
}