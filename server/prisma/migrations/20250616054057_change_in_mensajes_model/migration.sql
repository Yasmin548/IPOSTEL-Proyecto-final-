/*
  Warnings:

  - The primary key for the `mensaje` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `mensaje` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mensaje` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE INDEX `mensaje_correo_idx` ON `mensaje`(`correo`);

-- CreateIndex
CREATE INDEX `mensaje_fecha_idx` ON `mensaje`(`fecha`);
