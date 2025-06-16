import express from "express";
import empleadoRouter from "./empleado.route";
import { cargoRouter } from "./cargo.route";
import sucursalRouter from "./sucursal.route";
import authRouter from "./auth.route";
import userRouter from "./user.route"
import { verifyUser } from "../middlewares/token.middleware";

const indexRouter = express.Router();

indexRouter.get("/", ()=>{});
indexRouter.use("/empleados", verifyUser, empleadoRouter);
indexRouter.use('/cargos', verifyUser, cargoRouter)
indexRouter.use("/sucursal", verifyUser, sucursalRouter)
indexRouter.use("/auth", authRouter)
indexRouter.use("/user", verifyUser, userRouter)

export default indexRouter;
