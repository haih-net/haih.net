import { builder } from '../../../builder'
import { CurrentUserUpdateInput } from '../inputs'
import { hashPassword } from '../helpers/auth'

builder.mutationField('updateCurrentUser', (t) =>
  t.prismaField({
    type: 'User',
    nullable: true,
    args: {
      data: t.arg({ type: CurrentUserUpdateInput, required: true }),
    },
    resolve: async (query, _root, args, ctx) => {
      const { currentUser } = ctx

      if (!currentUser) {
        throw new Error('Authorization required')
      }

      const { password: passwordProp, ...other } = args.data

      const password = passwordProp
        ? await hashPassword(passwordProp)
        : undefined

      return ctx.prisma.user.update({
        ...query,
        data: {
          ...other,
          password,
        },
        where: {
          id: currentUser.id,
        },
      })
    },
  }),
)
