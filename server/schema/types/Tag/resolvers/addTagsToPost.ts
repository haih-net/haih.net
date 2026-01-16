import { builder } from '../../../builder'

builder.mutationField('addTagsToPost', (t) =>
  t.prismaField({
    type: 'Post',
    args: {
      postId: t.arg.string({ required: true }),
      tagIds: t.arg.stringList({ required: true }),
    },
    resolve: async (query, _root, args, ctx) => {
      return ctx.prisma.post.update({
        ...query,
        where: { id: args.postId },
        data: {
          Tags: {
            connect: args.tagIds.map((id) => ({ id })),
          },
        },
      })
    },
  }),
)
