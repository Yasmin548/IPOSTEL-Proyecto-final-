import express from "express";
import empleadoRouter from "./employee.route";
import { cargoRouter } from "./cargo.route";
import sucursalRouter from "./sucursal.route";

const indexRouter = express.Router();

indexRouter.get("/", ()=>{});
indexRouter.use("/empleados", empleadoRouter);
indexRouter.use('/cargos', cargoRouter)
indexRouter.use("/sucursal",sucursalRouter)

export default indexRouter;
