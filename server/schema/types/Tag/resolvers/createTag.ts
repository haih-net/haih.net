import { builder } from '../../../builder'

builder.mutationField('createTag', (t) =>
  t.prismaField({
    type: 'Tag',
    args: {
      name: t.arg.string({ required: true }),
    },
    resolve: async (query, _root, args, ctx) => {
      if (!ctx.currentUser) {
        throw new Error('Unauthorized')
      }

      return ctx.prisma.tag.create({
        ...query,
        data: {
          name: args.name,
          createdById: ctx.currentUser.id,
        },
      })
    },
  }),
)
