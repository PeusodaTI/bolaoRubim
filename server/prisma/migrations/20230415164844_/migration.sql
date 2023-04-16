/*
  Warnings:

  - You are about to drop the column `validation` on the `guesses` table. All the data in the column will be lost.
  - Added the required column `validation` to the `Players` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `guesses` DROP COLUMN `validation`;

-- AlterTable
ALTER TABLE `players` ADD COLUMN `validation` BOOLEAN NOT NULL;
