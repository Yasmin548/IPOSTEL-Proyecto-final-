import { error } from "console";
import { cargoListService, createCargoService, findCargoByID, findCargoByName } from "../../services/cargo.service";
import { IFunctionResponse, TCargo } from "../../types/index.types";
import { safe } from "../../wrapper/safe.wrapper";
import { ICargoController } from "../interface/index.interface";
import { createBrotliDecompress } from "zlib";


export class cargoController implements ICargoController {
    public async cargoListController(): Promise<IFunctionResponse<TCargo[] | null>> {
        return safe(async()=>{
            return await cargoListService()
        },{
            successStatus:200,
            successMessage:"Cargos Obtenidos Correctamente"
        })
    }

    public async createCargoController(cargo: TCargo): Promise<IFunctionResponse<TCargo>> {
        return safe(async()=>{
            const existingCargoID = await findCargoByID(cargo.id)

            if(existingCargoID){
                throw{
                    status:409,
                    message:"Ya existe un cargo con ese id",
                    error:"Duplicado"
                }
            }

            const existingCargoName = await findCargoByName(cargo.nombre)

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
}