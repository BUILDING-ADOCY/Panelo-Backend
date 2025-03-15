-- CreateTable
CREATE TABLE "ResponseTime" (
    "id" TEXT NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResponseTime_pkey" PRIMARY KEY ("id")
);
