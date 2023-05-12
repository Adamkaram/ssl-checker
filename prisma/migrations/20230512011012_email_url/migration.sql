-- CreateTable
CREATE TABLE "MailForHost" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" VARCHAR(255) NOT NULL,
    "MailForHost" TEXT NOT NULL,
    "expiringDate" TEXT NOT NULL,

    CONSTRAINT "MailForHost_pkey" PRIMARY KEY ("id")
);
