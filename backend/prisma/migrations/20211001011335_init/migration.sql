-- CreateTable
CREATE TABLE "Expense" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
