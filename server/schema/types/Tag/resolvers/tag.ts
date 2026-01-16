import { builder } from '../../../builder'

builder.queryField('tag', (t) =>
  t.prismaField({
    type: 'Tag',
    nullable: true,
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (query, _root, args, ctx) => {
      return await ctx.prisma.tag.findUnique({
        ...query,
        where: { id: args.id },
      })
    },
  }),
)
