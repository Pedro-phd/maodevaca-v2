-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "planningId" TEXT;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_planningId_fkey" FOREIGN KEY ("planningId") REFERENCES "plannings"("id") ON DELETE SET NULL ON UPDATE CASCADE;
