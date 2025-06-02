import { findSucursalByID, sucursalListService } from "../services/sucursal.service";
import { IFunctionResponse, TSucursal } from "../types/index.types";
import { safe } from "../wrapper/safe.wrapper";
import { ISucursalController } from "./interface/index.interface";


export class sucursalController implements ISucursalController{
    public async sucursalListController(): Promise<IFunctionResponse<TSucursal[] | null>> {
        return safe(async()=>{
            return await sucursalListService()
        },{
            successStatus:200,
            successMessage:`Lista de Sucursales`
        })
    }

    public async searchSucursalByIDController(rif: string): Promise<IFunctionResponse<TSucursal | null>> {
        return safe(async()=>{
            return await findSucursalByID(rif)
        },{
            successStatus:200,
            successMessage:`Sucursal Encontrada`
        })
    }

    public async
}