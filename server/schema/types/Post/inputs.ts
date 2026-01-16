import { builder } from '../../builder'
import { PostStatusEnum } from './index'

export const PostWhereInput = builder.inputType('PostWhereInput', {
  fields: (t) => ({
    status: t.field({ type: PostStatusEnum }),
  }),
})

export const CreatePostInput = builder.inputType('CreatePostInput', {
  fields: (t) => ({
    title: t.string({ required: false }),
    description: t.string({ required: false }),
    intro: t.string({ required: false }),
    content: t.string({ required: true }),
    status: t.field({ type: PostStatusEnum, required: false }),
    tagIds: t.stringList({ required: false }),
  }),
})

export const UpdatePostInput = builder.inputType('UpdatePostInput', {
  fields: (t) => ({
    title: t.string({ required: false }),
    description: t.string({ required: false }),
    intro: t.string({ required: false }),
    content: t.string({ required: false }),
    status: t.field({ type: PostStatusEnum, required: false }),
    tagIds: t.stringList({ required: false }),
  }),
})
