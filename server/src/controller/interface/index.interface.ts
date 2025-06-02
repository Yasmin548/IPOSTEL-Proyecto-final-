import { createCargoDTO, updateCargoDTO } from "../../DTO/cargo.dto";
import { createSucursalDTO, updateSucursalDTO } from "../../DTO/sucursal.dto";
import { IFunctionResponse, TCargo, TEmpleado, TSucursal } from "../../types/index.types";

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

export interface ISucursalController{
    sucursalListController():Promise<IFunctionResponse<TSucursal[] | null>>
    searchSucursalByIDController(rif:string):Promise<IFunctionResponse<TSucursal | null>>
    createSucursalController(sucursal:createSucursalDTO):Promise<IFunctionResponse<TSucursal>>
    updateSucursalController(rif:string, sucursal:updateSucursalDTO):Promise<IFunctionResponse<TSucursal>>
    deleteSucursalController(rif:string):Promise<IFunctionResponse<TSucursal>>
}