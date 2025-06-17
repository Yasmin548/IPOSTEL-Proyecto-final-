import { updateCargoDTO } from "../DTO/cargo.dto";
import { cargoListService, createCargoService, deleteCargoService, findCargoByIDService, findCargoByNameService, updateCargoService } from "../services/cargo.service";
import { IFunctionResponse, IPagination, TCargo } from "../types/index.types";
import { safe } from "../wrapper/safe.wrapper";
import { ICargoController } from "./interface/index.interface";



export class cargoController implements ICargoController {
    //Get list
    public async cargoListController(page:number, limit:number): Promise<IFunctionResponse<{cargos:TCargo[], pagination:IPagination}>> {
        return safe(async()=>{
            const cargos= await cargoListService(page, limit)
            if(!cargos){
                throw{
                    status:404,
                    message:"No hay cargos Registrados",
                    error:"No content"
                }
            }
            return{cargos:cargos.data, pagination:cargos.pagination}
        },{
            successStatus:200,
            successMessage:"Cargos Obtenidos Correctamente"
        })
    }
    

    //Create Cargo
    public async createCargoController(cargo: TCargo): Promise<IFunctionResponse<TCargo>> {
        return safe(async()=>{
            
            const existingCargoName = await findCargoByNameService(cargo.nombre)

            if(existingCargoName){
                 throw{
                    status:409,
                    message:"Ya existe un cargo con ese nombre",
                    error:"Duplicado"
                }
            }

            return await createCargoService(cargo)
        },{
            successStatus:201,
            successMessage:"Cargo Creado Correctamente"
        })
    }

    public async searchCargoByIDController(id: number): Promise<IFunctionResponse<TCargo | null>> {
        return safe(async()=>{
            return await findCargoByIDService(id)
        },{
            successStatus:200,
            successMessage:"Cargo encontrado"
        })
    }

    public async searchCargoByNameController(name: string): Promise<IFunctionResponse<TCargo | null>> {
        return safe(async()=>{
            return await findCargoByNameService(name)
        },{
            successStatus:200,
            successMessage:"Cargo encontrado"
        })
    }

    public async updateCargoController(id: number, cargo: updateCargoDTO): Promise<IFunctionResponse<TCargo>> {
        return safe(async()=>{
            const existingCargoID = await findCargoByIDService(id)
            if(!existingCargoID){
                throw{
                    status:400,
                    message:`No existe un cargo con el id: ${id}`,
                    error:`Bad request`
                }
            }

            return await updateCargoService(id, cargo)
        },{
            successStatus:201,
            successMessage:`Cargo actualizado correctamente`
        })
    }

    public async deleteCargoController(id: number): Promise<IFunctionResponse<null>> {
        return safe(async()=>{
            const existingCargo = await findCargoByIDService(id)
            if(!existingCargo){
                throw{
                    status:400,
                    message:`No existe un cargo con el id ${id}`,
                    error:`Bad Request`
                }
            }

            return await deleteCargoService(id)
        },{
            successStatus:201,
            successMessage:`Cargo eliminado Correctamente`
        })
    }
}