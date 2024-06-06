/*
  Warnings:

  - A unique constraint covering the columns `[outfitID]` on the table `Saved` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `outfitID` to the `Saved` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hamper" ALTER COLUMN "peiceID" DROP DEFAULT;
DROP SEQUENCE "Hamper_peiceID_seq";

-- AlterTable
ALTER TABLE "Saved" ADD COLUMN     "outfitID" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "HighScore" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "HighScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Logged" (
    "outfitID" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Logged_pkey" PRIMARY KEY ("outfitID")
);

-- CreateTable
CREATE TABLE "Outfit" (
    "outfitID" SERIAL NOT NULL,
    "shirtID" INTEGER NOT NULL,
    "pantsID" INTEGER NOT NULL,

    CONSTRAINT "Outfit_pkey" PRIMARY KEY ("outfitID")
);

-- CreateTable
CREATE TABLE "Peice" (
    "peiceID" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "wears" INTEGER NOT NULL,
    "wearsSinceWash" INTEGER NOT NULL,
    "lastWash" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Peice_pkey" PRIMARY KEY ("peiceID")
);

-- CreateTable
CREATE TABLE "Shirt" (
    "peiceID" INTEGER NOT NULL,
    "Size" TEXT NOT NULL,

    CONSTRAINT "Shirt_pkey" PRIMARY KEY ("peiceID")
);

-- CreateTable
CREATE TABLE "Pants" (
    "peiceID" INTEGER NOT NULL,
    "waiste" INTEGER NOT NULL,

    CONSTRAINT "Pants_pkey" PRIMARY KEY ("peiceID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Outfit_shirtID_key" ON "Outfit"("shirtID");

-- CreateIndex
CREATE UNIQUE INDEX "Outfit_pantsID_key" ON "Outfit"("pantsID");

-- CreateIndex
CREATE UNIQUE INDEX "Saved_outfitID_key" ON "Saved"("outfitID");

-- AddForeignKey
ALTER TABLE "Logged" ADD CONSTRAINT "Logged_outfitID_fkey" FOREIGN KEY ("outfitID") REFERENCES "Outfit"("outfitID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hamper" ADD CONSTRAINT "Hamper_peiceID_fkey" FOREIGN KEY ("peiceID") REFERENCES "Peice"("peiceID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Saved" ADD CONSTRAINT "Saved_outfitID_fkey" FOREIGN KEY ("outfitID") REFERENCES "Outfit"("outfitID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outfit" ADD CONSTRAINT "Outfit_shirtID_fkey" FOREIGN KEY ("shirtID") REFERENCES "Shirt"("peiceID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outfit" ADD CONSTRAINT "Outfit_pantsID_fkey" FOREIGN KEY ("pantsID") REFERENCES "Pants"("peiceID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shirt" ADD CONSTRAINT "Shirt_peiceID_fkey" FOREIGN KEY ("peiceID") REFERENCES "Peice"("peiceID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pants" ADD CONSTRAINT "Pants_peiceID_fkey" FOREIGN KEY ("peiceID") REFERENCES "Peice"("peiceID") ON DELETE RESTRICT ON UPDATE CASCADE;
