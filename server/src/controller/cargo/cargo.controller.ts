import { cargoListService } from "../../services/cargo.service";
import { IFunctionResponse, TCargo } from "../../types/index.types";
import { safe } from "../../wrapper/safe.wrapper";
import { ICargoController } from "../interface/index.interface";


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
        
    }
}