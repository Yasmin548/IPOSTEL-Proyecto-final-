const { empleado } = require("../../config/prisma.config")


const createEmployee = async (req, res)=>{
   try {
     const {
        cedula,
        nombre,
        apellido,
        cumpleaños,
        edad,
        sexo,
        educacion,
        telefono,
        direccion,
        correo,
        sucursal,
        ingreso,
        cargo

    }= req.body

    const user= cedula || nombre || apellido || correo || cargo || sucursal
   
    if(!user){
        return res.status(500).json({
            status:500,
            message:"Ingresar la informacion correspondiente",
        })
    }

    const newUser = await empleado.create({
        cedula,
        nombre,
        apellido,
        cumpleaños,
        edad,
        sexo,
        educacion,
        telefono,
        direccion,
        correo,
        sucursal,
        ingreso,
        cargo

    })

   } catch (error) {
    
   }
}