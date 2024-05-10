/*
  Warnings:

  - You are about to drop the `BreakOutHighScore` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BrighamBreakoutUsers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Edge` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FlowerServiceRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FoodDeliveryServiceRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GiftServiceRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MedicalDeviceServiceRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MedicineDeliveryServiceRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Node` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ReligiousServiceRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoomSchedulingRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ServiceRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `weather` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Edge" DROP CONSTRAINT "Edge_endNodeID_fkey";

-- DropForeignKey
ALTER TABLE "Edge" DROP CONSTRAINT "Edge_startNodeID_fkey";

-- DropForeignKey
ALTER TABLE "FlowerServiceRequest" DROP CONSTRAINT "FlowerServiceRequest_SRID_fkey";

-- DropForeignKey
ALTER TABLE "FoodDeliveryServiceRequest" DROP CONSTRAINT "FoodDeliveryServiceRequest_SRID_fkey";

-- DropForeignKey
ALTER TABLE "GiftServiceRequest" DROP CONSTRAINT "GiftServiceRequest_SRID_fkey";

-- DropForeignKey
ALTER TABLE "MedicalDeviceServiceRequest" DROP CONSTRAINT "MedicalDeviceServiceRequest_SRID_fkey";

-- DropForeignKey
ALTER TABLE "MedicineDeliveryServiceRequest" DROP CONSTRAINT "MedicineDeliveryServiceRequest_SRID_fkey";

-- DropForeignKey
ALTER TABLE "ReligiousServiceRequest" DROP CONSTRAINT "ReligiousServiceRequest_SRID_fkey";

-- DropForeignKey
ALTER TABLE "RoomSchedulingRequest" DROP CONSTRAINT "RoomSchedulingRequest_SRID_fkey";

-- DropForeignKey
ALTER TABLE "ServiceRequest" DROP CONSTRAINT "ServiceRequest_employeeEmail_fkey";

-- DropForeignKey
ALTER TABLE "ServiceRequest" DROP CONSTRAINT "ServiceRequest_location_fkey";

-- DropTable
DROP TABLE "BreakOutHighScore";

-- DropTable
DROP TABLE "BrighamBreakoutUsers";

-- DropTable
DROP TABLE "Edge";

-- DropTable
DROP TABLE "Employee";

-- DropTable
DROP TABLE "FlowerServiceRequest";

-- DropTable
DROP TABLE "FoodDeliveryServiceRequest";

-- DropTable
DROP TABLE "GiftServiceRequest";

-- DropTable
DROP TABLE "MedicalDeviceServiceRequest";

-- DropTable
DROP TABLE "MedicineDeliveryServiceRequest";

-- DropTable
DROP TABLE "Node";

-- DropTable
DROP TABLE "ReligiousServiceRequest";

-- DropTable
DROP TABLE "RoomSchedulingRequest";

-- DropTable
DROP TABLE "ServiceRequest";

-- DropTable
DROP TABLE "weather";

-- CreateTable
CREATE TABLE "HighScore" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "HighScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logged" (
    "loggedID" SERIAL NOT NULL,
    "outfitID" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Logged_pkey" PRIMARY KEY ("loggedID")
);

-- CreateTable
CREATE TABLE "Outfit" (
    "outfitID" SERIAL NOT NULL,

    CONSTRAINT "Outfit_pkey" PRIMARY KEY ("outfitID")
);
