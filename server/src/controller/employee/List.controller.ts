import Prisma from "../../config/prisma.config";
import { Request, Response } from "express";

const employeeList = async (req:Request, res:Response) => {
  try {
    const response = await Prisma.empleado.findMany();

     response.length > 0
      ? res.status(200).json({
          status: 200,
          message: "Lista de empleados Obtenida",
          data: response,
        })
      : res.status(200).json({
          status: 200,
          message: "No hay empleados registrados",
        });
  } catch (error) {
    console.error("Error en el controlador de empleados", error);
     res.status(500).json({
      status: 500,
      message: "No se ha podido obtener la lista de empleados",
      error,
    });
  }
};

export default employeeList;
