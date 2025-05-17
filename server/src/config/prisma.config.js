//Importo el generador de consultas de Prisma
const { PrismaClient } = require("../../generated/prisma");

//Instancio al Prisma client
const Prisma = new PrismaClient();

module.exports = Prisma;
