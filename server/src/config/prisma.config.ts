//Importo el generador de consultas de Prisma
import { PrismaClient } from "../../generated/prisma";

//Instancio al Prisma client
const Prisma = new PrismaClient();

export default Prisma;
