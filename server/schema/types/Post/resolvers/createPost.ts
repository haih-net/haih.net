import { builder } from '../../../builder'
import { CreatePostInput } from '../inputs'
import { validatePost } from '../helpers/validate'

builder.mutationField('createPost', (t) =>
  t.prismaField({
    type: 'Post',
    args: {
      data: t.arg({ type: CreatePostInput, required: true }),
    },
    resolve: async (_query, _root, args, ctx) => {
      if (!ctx.currentUser) {
        throw new Error('Unauthorized')
      }

      const validation = validatePost({
        title: args.data.title,
        description: args.data.description,
        intro: args.data.intro,
        content: args.data.content,
      })

      if (!validation.valid) {
        const errorMessages = validation.errors.map(
          (e) => `${e.field}: ${e.message}`,
        )
        throw new Error(`Validation failed: ${errorMessages.join('; ')}`)
      }

      const post = await ctx.prisma.post.create({
        data: {
          title: args.data.title,
          description: args.data.description,
          intro: args.data.intro,
          content: args.data.content,
          status: args.data.status ?? 'draft',
          createdById: ctx.currentUser.id,
          Tags: args.data.tagIds?.length
            ? { connect: args.data.tagIds.map((id) => ({ id })) }
            : undefined,
        },
      })

      return post
    },
  }),
)
