/*
  Warnings:

  - You are about to drop the `Hamper` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Logged` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Outfit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Saved` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Piece` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Hamper" DROP CONSTRAINT "Hamper_pieceID_fkey";

-- DropForeignKey
ALTER TABLE "Logged" DROP CONSTRAINT "Logged_outfitID_fkey";

-- DropForeignKey
ALTER TABLE "Outfit" DROP CONSTRAINT "Outfit_pantsID_fkey";

-- DropForeignKey
ALTER TABLE "Outfit" DROP CONSTRAINT "Outfit_shirtID_fkey";

-- DropForeignKey
ALTER TABLE "Pants" DROP CONSTRAINT "Pants_pieceID_fkey";

-- DropForeignKey
ALTER TABLE "Saved" DROP CONSTRAINT "Saved_outfitID_fkey";

-- AlterTable
ALTER TABLE "Piece" ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "Hamper";

-- DropTable
DROP TABLE "Logged";

-- DropTable
DROP TABLE "Outfit";

-- DropTable
DROP TABLE "Pants";

-- DropTable
DROP TABLE "Saved";
