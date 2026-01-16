import { Prisma } from '@prisma/client'

interface PostWhereInput {
  status?: 'draft' | 'published' | 'unpublished' | null
  tagIds?: string[] | null
}

export function buildPostWhere(
  where: PostWhereInput | null | undefined,
  tagIds?: string[] | null,
): Prisma.PostWhereInput {
  const result: Prisma.PostWhereInput = {}

  if (where?.status) {
    result.status = where.status
  }

  if (tagIds?.length) {
    result.Tags = {
      some: {
        id: { in: tagIds },
      },
    }
  }

  return result
}
