import { builder } from '../../../builder'

builder.mutationField('updateTag', (t) =>
  t.prismaField({
    type: 'Tag',
    args: {
      id: t.arg.string({ required: true }),
      name: t.arg.string({ required: true }),
    },
    resolve: async (query, _root, args, ctx) => {
      if (!ctx.currentUser) {
        throw new Error('Unauthorized')
      }

      const tag = await ctx.prisma.tag.findUnique({
        where: { id: args.id },
      })

      if (!tag) {
        throw new Error('Tag not found')
      }

      if (tag.createdById !== ctx.currentUser.id) {
        throw new Error('Forbidden')
      }

      return ctx.prisma.tag.update({
        ...query,
        where: { id: args.id },
        data: {
          name: args.name,
        },
      })
    },
  }),
)
