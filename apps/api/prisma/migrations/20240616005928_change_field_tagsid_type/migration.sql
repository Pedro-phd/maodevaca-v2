/*
  Warnings:

  - You are about to drop the `_TagToTransaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TagToTransaction" DROP CONSTRAINT "_TagToTransaction_A_fkey";

-- DropForeignKey
ALTER TABLE "_TagToTransaction" DROP CONSTRAINT "_TagToTransaction_B_fkey";

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "tags_id" INTEGER[];

-- DropTable
DROP TABLE "_TagToTransaction";
