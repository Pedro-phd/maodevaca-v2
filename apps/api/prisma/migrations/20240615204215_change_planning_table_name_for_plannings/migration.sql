/*
  Warnings:

  - You are about to drop the `Planning` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PlanningToUser" DROP CONSTRAINT "_PlanningToUser_A_fkey";

-- DropTable
DROP TABLE "Planning";

-- CreateTable
CREATE TABLE "plannings" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "plannings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "_PlanningToUser" ADD CONSTRAINT "_PlanningToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "plannings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
