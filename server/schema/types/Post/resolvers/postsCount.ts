import { builder } from '../../../builder'
import { PostWhereInput } from '../inputs'
import { buildPostWhere } from '../helpers/buildPostWhere'

builder.queryField('postsCount', (t) =>
  t.int({
    args: {
      where: t.arg({ type: PostWhereInput }),
      tagIds: t.arg.stringList(),
    },
    resolve: async (_root, args, ctx) => {
      return await ctx.prisma.post.count({
        where: buildPostWhere(args.where, args.tagIds),
      })
    },
  }),
)
