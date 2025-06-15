/*
  Warnings:

  - You are about to drop the `contacto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `contacto`;

-- CreateTable
CREATE TABLE `mensaje` (
    `correo` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `asunto` VARCHAR(191) NOT NULL,
    `mensaje` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`correo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
