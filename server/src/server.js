//Declaro las librerías
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const indexRouter = require("./routes/index.route");

//Inicialización de express (librería para crear API)
const server = express();

//Esto es para que pueda leer las variables de entorno
dotenv.config();

//Declaro las especificaciones de cors
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

//Declaro el uso de algunas especificaciones del server
server.use(express.json());
server.use(morgan("tiny"));
server.use(cors(corsOptions));

//Declaro el puerto como variable de entorno, pero que use por defecto el 3001
const PORT = process.env.PORT || 3001;

//Declara el uso de archivos estáticos (archivos del front)
server.use(express.static(path.join(__dirname, "views")));
server.use(express.static(path.join(__dirname, "public")));

//Declaro que la ruta principal la sirva desde indexRouter
server.use("/", indexRouter);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//404 Handler
server.use((req, res) => {
  res.redirect("/");
});
