import express from "express";
import empleadoRouter from "./empleado.route";
import { cargoRouter } from "./cargo.route";
import sucursalRouter from "./sucursal.route";
import authRouter from "./auth.route";

const indexRouter = express.Router();

indexRouter.get("/", ()=>{});
indexRouter.use("/empleados", empleadoRouter);
indexRouter.use('/cargos', cargoRouter)
indexRouter.use("/sucursal",sucursalRouter)
indexRouter.use("/auth", authRouter)

export default indexRouter;
