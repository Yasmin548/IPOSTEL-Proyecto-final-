import express from "express";
import path from "path";
import empleadoRouter from "./employee.route";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});
indexRouter.use("/employee", empleadoRouter);

export default indexRouter;
