import { builder } from '../../../builder'

builder.queryField('tags', (t) =>
  t.prismaField({
    type: ['Tag'],
    resolve: (query, _root, _args, ctx) =>
      ctx.prisma.tag.findMany({
        ...query,
        orderBy: { name: 'asc' },
      }),
  }),
)
