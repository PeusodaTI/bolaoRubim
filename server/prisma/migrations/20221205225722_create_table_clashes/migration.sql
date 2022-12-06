-- CreateTable
CREATE TABLE `Clashes` (
    `id` VARCHAR(191) NOT NULL,
    `clubA` VARCHAR(191) NOT NULL,
    `clubB` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
