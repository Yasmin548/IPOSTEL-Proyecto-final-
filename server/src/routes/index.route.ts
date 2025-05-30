import express from "express";
import path from "path";
import empleadoRouter from "./employee.route";

const indexRouter = express.Router();

indexRouter.get("/", () => {});
indexRouter.use("/empleados", empleadoRouter);

export default indexRouter;
