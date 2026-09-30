-- CreateTable
CREATE TABLE "LifeArea" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "color" TEXT NOT NULL DEFAULT '#9CA3D4',
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "LifeArea_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LifeArea_name_key" ON "LifeArea"("name");
