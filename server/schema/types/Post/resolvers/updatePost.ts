import { Prisma } from '@prisma/client'
import { builder } from '../../../builder'
import { UpdatePostInput } from '../inputs'
import { validatePost } from '../helpers/validate'

builder.mutationField('updatePost', (t) =>
  t.prismaField({
    type: 'Post',
    args: {
      id: t.arg.string({ required: true }),
      data: t.arg({ type: UpdatePostInput, required: true }),
    },
    resolve: async (_query, _root, args, ctx) => {
      if (!ctx.currentUser) {
        throw new Error('Unauthorized')
      }

      const post = await ctx.prisma.post.findUnique({
        where: { id: args.id },
      })

      if (!post) {
        throw new Error('Post not found')
      }

      if (post.createdById !== ctx.currentUser.id) {
        throw new Error('Forbidden')
      }

      const validation = validatePost({
        title: args.data.title ?? post.title,
        description: args.data.description ?? post.description,
        intro: args.data.intro ?? post.intro,
        content: args.data.content ?? post.content,
      })

      if (!validation.valid) {
        const errorMessages = validation.errors.map(
          (e) => `${e.field}: ${e.message}`,
        )
        throw new Error(`Validation failed: ${errorMessages.join('; ')}`)
      }

      // Shared content fields between Post and PostRevision (see prisma/schema.prisma)
      // IMPORTANT: Keep this list in sync with schema.
      const sharedFields: Pick<
        Prisma.PostRevisionCreateInput,
        'status' | 'title' | 'description' | 'intro' | 'content' | 'signature'
      > = {
        status: post.status,
        title: post.title,
        description: post.description,
        intro: post.intro,
        content: post.content,
        signature: post.signature,
      }

      const updatedPost = await ctx.prisma.post.update({
        where: { id: args.id },
        data: {
          title: args.data.title ?? undefined,
          description: args.data.description ?? undefined,
          intro: args.data.intro ?? undefined,
          content: args.data.content ?? undefined,
          status: args.data.status ?? undefined,
          revision: { increment: 1 },
          signature: null,
          Revisions: {
            create: {
              ...sharedFields,
            },
          },
          Tags: args.data.tagIds
            ? { set: args.data.tagIds.map((id) => ({ id })) }
            : undefined,
        },
      })

      return updatedPost
    },
  }),
)
