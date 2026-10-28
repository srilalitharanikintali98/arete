-- Rename Goal.name to Goal.title, preserving existing data.

-- AlterTable
ALTER TABLE "Goal" RENAME COLUMN "name" TO "title";
