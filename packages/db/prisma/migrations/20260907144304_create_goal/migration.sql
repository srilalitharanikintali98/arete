-- CreateEnum
CREATE TYPE "GoalStatus" AS ENUM ('ACTIVE', 'INTEREST', 'PAUSED', 'DONE');

-- CreateTable
CREATE TABLE "Goal" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "GoalStatus" NOT NULL DEFAULT 'INTEREST',
    "lifeAreaId" UUID NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_lifeAreaId_fkey" FOREIGN KEY ("lifeAreaId") REFERENCES "LifeArea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
