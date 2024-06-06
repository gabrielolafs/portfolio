/*
  Warnings:

  - The primary key for the `Hamper` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `peiceID` on the `Hamper` table. All the data in the column will be lost.
  - The primary key for the `Pants` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `peiceID` on the `Pants` table. All the data in the column will be lost.
  - You are about to drop the column `waiste` on the `Pants` table. All the data in the column will be lost.
  - The primary key for the `Shirt` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Size` on the `Shirt` table. All the data in the column will be lost.
  - You are about to drop the column `peiceID` on the `Shirt` table. All the data in the column will be lost.
  - You are about to drop the `Peice` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pieceID` to the `Hamper` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pieceID` to the `Pants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waist` to the `Pants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pieceID` to the `Shirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Shirt` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Hamper" DROP CONSTRAINT "Hamper_peiceID_fkey";

-- DropForeignKey
ALTER TABLE "Outfit" DROP CONSTRAINT "Outfit_pantsID_fkey";

-- DropForeignKey
ALTER TABLE "Outfit" DROP CONSTRAINT "Outfit_shirtID_fkey";

-- DropForeignKey
ALTER TABLE "Pants" DROP CONSTRAINT "Pants_peiceID_fkey";

-- DropForeignKey
ALTER TABLE "Shirt" DROP CONSTRAINT "Shirt_peiceID_fkey";

-- AlterTable
ALTER TABLE "Hamper" DROP CONSTRAINT "Hamper_pkey",
DROP COLUMN "peiceID",
ADD COLUMN     "pieceID" INTEGER NOT NULL,
ADD CONSTRAINT "Hamper_pkey" PRIMARY KEY ("pieceID");

-- AlterTable
ALTER TABLE "Pants" DROP CONSTRAINT "Pants_pkey",
DROP COLUMN "peiceID",
DROP COLUMN "waiste",
ADD COLUMN     "pieceID" INTEGER NOT NULL,
ADD COLUMN     "waist" INTEGER NOT NULL,
ADD CONSTRAINT "Pants_pkey" PRIMARY KEY ("pieceID");

-- AlterTable
ALTER TABLE "Shirt" DROP CONSTRAINT "Shirt_pkey",
DROP COLUMN "Size",
DROP COLUMN "peiceID",
ADD COLUMN     "pieceID" INTEGER NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL,
ADD CONSTRAINT "Shirt_pkey" PRIMARY KEY ("pieceID");

-- DropTable
DROP TABLE "Peice";

-- CreateTable
CREATE TABLE "Piece" (
    "pieceID" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "wears" INTEGER NOT NULL,
    "wearsSinceWash" INTEGER NOT NULL,
    "lastWash" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Piece_pkey" PRIMARY KEY ("pieceID")
);

-- AddForeignKey
ALTER TABLE "Hamper" ADD CONSTRAINT "Hamper_pieceID_fkey" FOREIGN KEY ("pieceID") REFERENCES "Piece"("pieceID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outfit" ADD CONSTRAINT "Outfit_shirtID_fkey" FOREIGN KEY ("shirtID") REFERENCES "Shirt"("pieceID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outfit" ADD CONSTRAINT "Outfit_pantsID_fkey" FOREIGN KEY ("pantsID") REFERENCES "Pants"("pieceID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shirt" ADD CONSTRAINT "Shirt_pieceID_fkey" FOREIGN KEY ("pieceID") REFERENCES "Piece"("pieceID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pants" ADD CONSTRAINT "Pants_pieceID_fkey" FOREIGN KEY ("pieceID") REFERENCES "Piece"("pieceID") ON DELETE RESTRICT ON UPDATE CASCADE;
