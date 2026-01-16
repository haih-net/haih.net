-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('draft', 'published', 'unpublished');

-- CreateTable
CREATE TABLE "EthAccount" (
    "id" VARCHAR(36) NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "address" VARCHAR(42) NOT NULL,
    "userId" VARCHAR(36),

    CONSTRAINT "EthAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" VARCHAR(36) NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revision" INTEGER NOT NULL DEFAULT 1,
    "createdById" VARCHAR(36) NOT NULL,
    "status" "PostStatus" NOT NULL DEFAULT 'draft',
    "title" VARCHAR(512),
    "description" VARCHAR(3072),
    "intro" TEXT,
    "content" TEXT NOT NULL,
    "signature" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostRevision" (
    "id" VARCHAR(36) NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postId" VARCHAR(36) NOT NULL,
    "status" "PostStatus" NOT NULL,
    "title" VARCHAR(512),
    "description" VARCHAR(3072),
    "intro" TEXT,
    "content" TEXT NOT NULL,
    "signature" TEXT,

    CONSTRAINT "PostRevision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" VARCHAR(36) NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(128) NOT NULL,
    "createdById" VARCHAR(36) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PostToTag" (
    "A" VARCHAR(36) NOT NULL,
    "B" VARCHAR(36) NOT NULL,

    CONSTRAINT "_PostToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "EthAccount_userId_key" ON "EthAccount"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "EthAccount_address_key" ON "EthAccount"("address");

-- CreateIndex
CREATE INDEX "Post_createdById_idx" ON "Post"("createdById");

-- CreateIndex
CREATE INDEX "Post_createdAt_idx" ON "Post"("createdAt");

-- CreateIndex
CREATE INDEX "Post_status_idx" ON "Post"("status");

-- CreateIndex
CREATE INDEX "PostRevision_postId_idx" ON "PostRevision"("postId");

-- CreateIndex
CREATE INDEX "PostRevision_createdAt_idx" ON "PostRevision"("createdAt");

-- CreateIndex
CREATE INDEX "Tag_createdAt_idx" ON "Tag"("createdAt");

-- CreateIndex
CREATE INDEX "Tag_createdById_idx" ON "Tag"("createdById");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE INDEX "_PostToTag_B_index" ON "_PostToTag"("B");

-- AddForeignKey
ALTER TABLE "EthAccount" ADD CONSTRAINT "EthAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostRevision" ADD CONSTRAINT "PostRevision_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToTag" ADD CONSTRAINT "_PostToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToTag" ADD CONSTRAINT "_PostToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
