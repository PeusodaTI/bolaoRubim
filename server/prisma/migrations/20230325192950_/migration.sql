/*
  Warnings:

  - Added the required column `date` to the `Guesses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Players` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `guesses` ADD COLUMN `date` DATE NOT NULL;

-- AlterTable
ALTER TABLE `players` ADD COLUMN `date` DATE NOT NULL;
