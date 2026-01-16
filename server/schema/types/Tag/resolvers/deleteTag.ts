import { builder } from '../../../builder'

builder.mutationField('deleteTag', (t) =>
  t.prismaField({
    type: 'Tag',
    args: {
      id: t.arg.string({ required: true }),
    },
    resolve: async (_query, _root, args, ctx) => {
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

      await ctx.prisma.tag.delete({
        where: { id: args.id },
      })

      return tag
    },
  }),
)
