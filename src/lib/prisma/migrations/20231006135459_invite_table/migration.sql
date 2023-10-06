-- CreateTable
CREATE TABLE `Invite` (
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Invite_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
