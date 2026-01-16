import { builder } from '../../../builder'

builder.queryField('post', (t) =>
  t.prismaField({
    type: 'Post',
    nullable: true,
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _root, args, ctx) => {
      return await ctx.prisma.post.findUnique({
        ...query,
        where: { id: args.id },
      })
    },
  }),
)
