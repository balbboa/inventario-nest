-- CreateTable
CREATE TABLE "Modelo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Modelo_pkey" PRIMARY KEY ("id")
);
