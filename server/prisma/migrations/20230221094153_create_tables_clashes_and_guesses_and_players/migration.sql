-- CreateTable
CREATE TABLE `Clashes` (
    `id` VARCHAR(191) NOT NULL,
    `clubA` VARCHAR(191) NOT NULL,
    `clubB` VARCHAR(191) NOT NULL,
    `date` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Players` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Guesses` (
    `id` VARCHAR(191) NOT NULL,
    `resultClubA` INTEGER NOT NULL,
    `resultClubB` INTEGER NOT NULL,
    `validation` BOOLEAN NOT NULL,
    `clashesId` VARCHAR(191) NULL,
    `playersId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Guesses` ADD CONSTRAINT `Guesses_clashesId_fkey` FOREIGN KEY (`clashesId`) REFERENCES `Clashes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Guesses` ADD CONSTRAINT `Guesses_playersId_fkey` FOREIGN KEY (`playersId`) REFERENCES `Players`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
