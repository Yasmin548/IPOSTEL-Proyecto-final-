import { IHttpError } from "../types/httpError.type";


export class httpError extends Error implements IHttpError{
    status: number;
    error?: unknown;

    constructor(status:number, message:string, error?: unknown){
        super(message)
        this.name = "HttpError";
        this.status = status
    }
}