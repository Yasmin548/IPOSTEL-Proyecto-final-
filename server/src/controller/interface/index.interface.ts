import { createCargoDTO, updateCargoDTO } from "../../DTO/cargo.dto";
import { createEmpleadoDTO, updateEmpleadoDTO } from "../../DTO/empleado.dto";
import { createSucursalDTO, updateSucursalDTO } from "../../DTO/sucursal.dto";
import { createUserDTO, logUserDTO } from "../../DTO/user.dto";
import { IFunctionResponse, TCargo, TEmpleado, TSucursal, TUsuario } from "../../types/index.types";

export interface IEmpleadoController{
    empleadoListController():Promise <IFunctionResponse<TEmpleado[] | null>>
    empleadoListPaginatedController(req: any):Promise <IFunctionResponse<any>>
    searchEmpleadoByIDController(dni:string):Promise<IFunctionResponse<TEmpleado | null>>
    createEmpleadoController(empleado:createEmpleadoDTO):Promise<IFunctionResponse<TEmpleado>>
    updateEmpleadoController(dni:string, empleado:updateEmpleadoDTO):Promise<IFunctionResponse<TEmpleado>>
    deleteEmpleadoController(dni:string):Promise<IFunctionResponse<null>>
}

export interface ICargoController{
    cargoListController():Promise <IFunctionResponse<TCargo[] | null>>
    cargoListPaginatedController(req: any):Promise <IFunctionResponse<any>>
    createCargoController(cargo:createCargoDTO):Promise<IFunctionResponse<TCargo>>
    searchCargoByIDController(id:number):Promise<IFunctionResponse<TCargo | null>>
    searchCargoByNameController(name:string):Promise<IFunctionResponse<TCargo | null>>
    updateCargoController(id:number, cargo:updateCargoDTO):Promise<IFunctionResponse<TCargo>>
    deleteCargoController(id:number):Promise<IFunctionResponse<null>>
}

export interface ISucursalController{
    sucursalListController():Promise<IFunctionResponse<TSucursal[] | null>>
    sucursalListPaginatedController(req: any):Promise<IFunctionResponse<any>>
    searchSucursalByIDController(rif:string):Promise<IFunctionResponse<TSucursal | null>>
    createSucursalController(sucursal:createSucursalDTO):Promise<IFunctionResponse<TSucursal>>
    updateSucursalController(rif:string, sucursal:updateSucursalDTO):Promise<IFunctionResponse<TSucursal>>
    deleteSucursalController(rif:string):Promise<IFunctionResponse<null>>
}

export interface IAuthController{
    createUserController(user:createUserDTO):Promise<IFunctionResponse<TUsuario>>
    loginUserController(loginData:logUserDTO):Promise<IFunctionResponse<{user:Partial<TUsuario>, token:string}>>
}