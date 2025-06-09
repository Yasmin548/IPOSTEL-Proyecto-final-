import express,{ Request, Response } from "express"
import { sucursalController } from "../controller/sucursal.controller"
import { sendResponse } from "../utils/sendResponse.util"
import { validateClass } from "../middlewares/validateClass.middleware"
import { createSucursalDTO, updateSucursalDTO } from "../DTO/sucursal.dto"

const sucursalRouter = express.Router()
const controller = new sucursalController()

sucursalRouter
//Lista de Sucursales
.get('/', async(req:Request, res:Response)=>{
    // Si hay parámetros de paginación, usar la versión paginada
    if (req.query.page || req.query.limit) {
        const response = await controller.sucursalListPaginatedController(req);
        sendResponse(res, response);
    } else {
        const response = await controller.sucursalListController();
        sendResponse(res, response);
    }
})
//Lista de Sucursales Paginada
.get('/paginated', async(req:Request, res:Response)=>{
    const response = await controller.sucursalListPaginatedController(req);
    sendResponse(res, response);
})
//Busca Una Sucursal
.get('/:rif', async(req:Request, res:Response)=>{
    const rif = req.params.rif
    const response = await controller.searchSucursalByIDController(rif)
    sendResponse(res, response)
})
//Crea Una Sucursal
.post('/', validateClass(createSucursalDTO), async(req:Request, res:Response)=>{
    const sucursal: createSucursalDTO = req.body
    const response = await controller.createSucursalController(sucursal)
    sendResponse(res, response)
})
//Actualiza una Sucursal
.put('/:rif', validateClass(updateSucursalDTO), async(req:Request, res:Response)=>{
    const rif = req.params.rif
    const sucursal:updateSucursalDTO = req.body
    const response = await controller.updateSucursalController(rif, sucursal)
    sendResponse(res, response)
})
//Elimina una Sucursal
.delete('/:rif', async(req:Request, res:Response)=>{
    const rif = req.params.rif
    const response = await controller.deleteSucursalController(rif)
    sendResponse(res, response)
})

export default sucursalRouter