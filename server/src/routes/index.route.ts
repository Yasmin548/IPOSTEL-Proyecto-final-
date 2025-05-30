import express from "express";
import empleadoRouter from "./employee.route";
import { cargoRouter } from "./cargo.route";

const indexRouter = express.Router();

indexRouter.get("/", () => {});
indexRouter.use("/empleados", empleadoRouter);
indexRouter.use('/cargos', cargoRouter)

export default indexRouter;
