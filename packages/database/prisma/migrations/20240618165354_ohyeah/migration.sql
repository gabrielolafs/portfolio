/*
  Warnings:

  - You are about to drop the `HighScore` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Piece` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shirt` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Shirt" DROP CONSTRAINT "Shirt_pieceID_fkey";

-- DropTable
DROP TABLE "HighScore";

-- DropTable
DROP TABLE "Piece";

-- DropTable
DROP TABLE "Shirt";

-- CreateTable
CREATE TABLE "Network" (
    "networkID" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Network_pkey" PRIMARY KEY ("networkID")
);

-- CreateTable
CREATE TABLE "Cabinet" (
    "cabinetID" TEXT NOT NULL,
    "networkID" TEXT NOT NULL,

    CONSTRAINT "Cabinet_pkey" PRIMARY KEY ("cabinetID")
);

-- CreateTable
CREATE TABLE "Rack" (
    "rackID" TEXT NOT NULL,
    "rackNumber" INTEGER NOT NULL,
    "cabinetID" TEXT NOT NULL,

    CONSTRAINT "Rack_pkey" PRIMARY KEY ("rackID")
);

-- CreateTable
CREATE TABLE "Device" (
    "deviceID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rackID" TEXT NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("deviceID")
);

-- CreateTable
CREATE TABLE "Connection" (
    "connectionID" TEXT NOT NULL,
    "deviceID" TEXT NOT NULL,
    "portInfo" TEXT NOT NULL,
    "portNumber" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Connection_pkey" PRIMARY KEY ("connectionID")
);

-- AddForeignKey
ALTER TABLE "Cabinet" ADD CONSTRAINT "Cabinet_networkID_fkey" FOREIGN KEY ("networkID") REFERENCES "Network"("networkID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rack" ADD CONSTRAINT "Rack_cabinetID_fkey" FOREIGN KEY ("cabinetID") REFERENCES "Cabinet"("cabinetID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_rackID_fkey" FOREIGN KEY ("rackID") REFERENCES "Rack"("rackID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_deviceID_fkey" FOREIGN KEY ("deviceID") REFERENCES "Device"("deviceID") ON DELETE RESTRICT ON UPDATE CASCADE;
