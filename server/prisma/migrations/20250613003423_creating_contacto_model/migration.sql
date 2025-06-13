-- CreateTable
CREATE TABLE `contacto` (
    `correo` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `asunto` VARCHAR(191) NOT NULL,
    `mensaje` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`correo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
