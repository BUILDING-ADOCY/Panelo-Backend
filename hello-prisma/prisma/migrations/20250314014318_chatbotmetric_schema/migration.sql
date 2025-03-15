-- CreateTable
CREATE TABLE "ChatbotMetric" (
    "id" TEXT NOT NULL,
    "interactions" INTEGER NOT NULL,
    "queryVolume" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatbotMetric_pkey" PRIMARY KEY ("id")
);
