-- CreateTable
CREATE TABLE "Hamper" (
    "peiceID" SERIAL NOT NULL,
    "dateAdded" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hamper_pkey" PRIMARY KEY ("peiceID")
);

-- CreateTable
CREATE TABLE "Saved" (
    "savedID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Saved_pkey" PRIMARY KEY ("savedID")
);
