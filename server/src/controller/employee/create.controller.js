const { empleado } = require("../../config/prisma.config");

const createEmployee = async (req, res) => {
  try {
    const {
      id,
      photo,
      name,
      lastname,
      birthday,
      edad,
      sexo,
      educacion,
      telefono,
      direccion,
      email,
      fechaingreso,
      cargo,
    } = req.body;

    if (!id || !name || !lastname || !email || !cargo) {
      return res.status(400).json({
        status: 400,
        message:
          "Faltan campos obligatorios: cédula, nombre, apellido, email o cargo",
      });
    }

    const newUser = await empleado.create({
      id,
      photo,
      name,
      lastname,
      birthday,
      edad,
      sexo,
      educacion,
      telefono,
      direccion,
      email,
      fechaingreso,
      cargo,
    });

    return res.status(201).json({
      status: 201,
      message: "Empleado registrado con exito",
      data: newUser,
    });
  } catch (error) {}
};
