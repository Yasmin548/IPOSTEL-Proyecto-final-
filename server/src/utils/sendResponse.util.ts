import {Response} from "express"

export function sendResponse <T>(res:Response, response:{
    status: number,
    message: string,
    data?:T,
    error?: unknown
}){
    res.status(response.status).json(response)
}