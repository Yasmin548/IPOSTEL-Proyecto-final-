//Importo modulo que me permite hacer querys de sql
const mysql = require("mysql2");
//importo modulo para variables de entorno
const dotenv = require("dotenv");

//inicializo a las variables de entorno
dotenv.config();

//Destructuro del process.env las variables que necesito
const { DATABASE_URL_NO_DB, DATABASE_NAME } = process.env;

//Declaro una función asíncrona que crea la DB
const createDB = async () => {
  //Estos console.log fueron para depurar
  console.log("URL:", process.env.DATABASE_URL);
  console.log("DB NAME:", process.env.DATABASE_NAME);

  try {
    //Guardo en una constante la creación de la conexión
    const connection = await mysql.createConnection(DATABASE_URL_NO_DB);

    //Hago que se cree la DB si no existe
    connection.query(`CREATE DATABASE IF NOT EXISTS\`${DATABASE_NAME}\`;`);
    console.log(`DB have been created succesfully`);

    //Termina la conexión
    await connection.end();
  } catch (error) {
    //Atrapa el error y muestra el mensaje por la consola
    console.error("Error creating DB: ", error.message);
  }
};

createDB();
