//Declaro las librerías
import  express  from "express";
import morgan from "morgan";
import cors from "cors"
import dotenv from "dotenv"
import path from "path";
import indexRouter from "./routes/index.route";

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
server.use(express.static(path.join(__dirname, "src", "views")));
server.use(express.static(path.join(__dirname, "src", "public")));

//Declaro que la ruta principal la sirva desde indexRouter
server.use("/", indexRouter);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.use((req, res)=>{
  res.redirect('/')
})