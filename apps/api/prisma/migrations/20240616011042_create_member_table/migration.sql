/*
  Warnings:

  - You are about to drop the `_PlanningToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PlanningToUser" DROP CONSTRAINT "_PlanningToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_PlanningToUser" DROP CONSTRAINT "_PlanningToUser_B_fkey";

-- AlterTable
ALTER TABLE "plannings" ADD COLUMN     "owner_id" TEXT;

-- DropTable
DROP TABLE "_PlanningToUser";

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "planningId" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_planningId_fkey" FOREIGN KEY ("planningId") REFERENCES "plannings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plannings" ADD CONSTRAINT "plannings_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
