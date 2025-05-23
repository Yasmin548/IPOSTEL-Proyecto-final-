const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const { DATABASE_URL_NO_DB } = process.env;

const deleteDB = async () => {
  try {
    console.log(DATABASE_URL_NO_DB);
    const connection = await mysql.createConnection(DATABASE_URL_NO_DB);
    connection.query("DROP DATABASE IF EXISTS Ipostel_DB");
    console.log("DB Have been deleted succesfully");

    await connection.end();
  } catch (error) {
    console.error(`Error al eliminar la base de datos: ${error.message}`);
  }
};

deleteDB();
