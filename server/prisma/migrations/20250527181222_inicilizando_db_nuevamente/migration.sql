/*
  Warnings:

  - You are about to drop the column `cargo` on the `cargo` table. All the data in the column will be lost.
  - The primary key for the `empleado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `birthday` on the `empleado` table. All the data in the column will be lost.
  - You are about to drop the column `cargo` on the `empleado` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `empleado` table. All the data in the column will be lost.
  - You are about to drop the column `fechaingreso` on the `empleado` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `empleado` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `empleado` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `empleado` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `empleado` table. All the data in the column will be lost.
  - The primary key for the `sucursal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `direccionsucursal` on the `sucursal` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `sucursal` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[correo]` on the table `Empleado` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nombre` to the `Cargo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apellido` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cargoId` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correo` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dni` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaIngreso` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaNacimiento` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sucursalRif` to the `Empleado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `direccion` to the `Sucursal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rif` to the `Sucursal` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `empleado_email_key` ON `empleado`;

-- AlterTable
ALTER TABLE `cargo` DROP COLUMN `cargo`,
    ADD COLUMN `nombre` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `empleado` DROP PRIMARY KEY,
    DROP COLUMN `birthday`,
    DROP COLUMN `cargo`,
    DROP COLUMN `email`,
    DROP COLUMN `fechaingreso`,
    DROP COLUMN `id`,
    DROP COLUMN `lastname`,
    DROP COLUMN `name`,
    DROP COLUMN `photo`,
    ADD COLUMN `apellido` VARCHAR(191) NOT NULL,
    ADD COLUMN `cargoId` INTEGER NOT NULL,
    ADD COLUMN `correo` VARCHAR(191) NOT NULL,
    ADD COLUMN `dni` VARCHAR(191) NOT NULL,
    ADD COLUMN `fechaIngreso` DATETIME(3) NOT NULL,
    ADD COLUMN `fechaNacimiento` DATETIME(3) NOT NULL,
    ADD COLUMN `foto` VARCHAR(191) NULL,
    ADD COLUMN `nombre` VARCHAR(191) NOT NULL,
    ADD COLUMN `sucursalRif` VARCHAR(191) NOT NULL,
    MODIFY `telefono` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`dni`);

-- AlterTable
ALTER TABLE `sucursal` DROP PRIMARY KEY,
    DROP COLUMN `direccionsucursal`,
    DROP COLUMN `id`,
    ADD COLUMN `direccion` VARCHAR(191) NOT NULL,
    ADD COLUMN `rif` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`rif`);

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Usuario` (
    `correo` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `contraseña` VARCHAR(191) NOT NULL,
    `rol` ENUM('ADMIN', 'EMPLEADO', 'CLIENTE') NOT NULL DEFAULT 'CLIENTE',

    PRIMARY KEY (`correo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Empleado_correo_key` ON `Empleado`(`correo`);

-- AddForeignKey
ALTER TABLE `Empleado` ADD CONSTRAINT `Empleado_cargoId_fkey` FOREIGN KEY (`cargoId`) REFERENCES `Cargo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empleado` ADD CONSTRAINT `Empleado_sucursalRif_fkey` FOREIGN KEY (`sucursalRif`) REFERENCES `Sucursal`(`rif`) ON DELETE RESTRICT ON UPDATE CASCADE;
