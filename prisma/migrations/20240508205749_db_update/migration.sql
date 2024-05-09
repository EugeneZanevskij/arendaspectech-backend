/*
  Warnings:

  - Added the required column `absolutePath` to the `Equipment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `relativePath` to the `Equipment` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Booking_date_key";

-- AlterTable
ALTER TABLE "Equipment" ADD COLUMN     "absolutePath" TEXT NOT NULL,
ADD COLUMN     "relativePath" TEXT NOT NULL;
