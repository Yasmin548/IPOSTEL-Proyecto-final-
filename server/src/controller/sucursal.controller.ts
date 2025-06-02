import { createSucursalDTO, updateSucursalDTO } from "../DTO/sucursal.dto";
import { createSucursalService, deleteSucursalService, findSucursalByID, sucursalListService, updateSucursalService } from "../services/sucursal.service";
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

    public async createSucursalController(sucursal: createSucursalDTO): Promise<IFunctionResponse<TSucursal>> {
        return safe(async()=>{
            //Validación
            const existingSucursal = await findSucursalByID(sucursal.rif)
            
            if(existingSucursal){
                throw{
                    status:400,
                    message:`La sucursal ya se encuentra registrada`,
                    error:"Bad Request"
                }
            }

            return await createSucursalService(sucursal)
        },{
            successStatus:201,
            successMessage:"Sucursal Creada Correctamente"
        })
    }

    public async updateSucursalController(rif: string, sucursal: updateSucursalDTO): Promise<IFunctionResponse<TSucursal>> {
        return safe(async()=>{
            
            const existingSucursal = await findSucursalByID(rif)
            
            if(!existingSucursal){
                throw{
                    status:404,
                    message:`No existe una sucursal con el rif: ${rif}`,
                    error:"Not found"
                }
            }

            return await updateSucursalService(rif, sucursal)
        },{
            successStatus:201,
            successMessage:"Sucursal actulizada"
        })
    }

    public async deleteSucursalController(rif: string): Promise<IFunctionResponse<null>> {
        return safe(async()=>{
            const existingSucursal = await findSucursalByID(rif)
            
            if(!existingSucursal){
                throw{
                    status:404,
                    message:`No existe una sucursal con el rif: ${rif}`,
                    error:"Not found"
                }
            }

            return await deleteSucursalService(rif)
        },{
            successStatus:204,
            successMessage:"Sucursal Eliminada"
        })
    }
}