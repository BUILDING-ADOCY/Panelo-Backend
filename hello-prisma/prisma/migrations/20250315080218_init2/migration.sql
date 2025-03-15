-- CreateTable
CREATE TABLE "UsagePattern" (
    "id" TEXT NOT NULL,
    "peakTime" TEXT NOT NULL,
    "dailyPeak" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsagePattern_pkey" PRIMARY KEY ("id")
);
