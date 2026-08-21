// export type Post = {
//   id: string
//   title: string
//   description: string
//   author: string
//   authorKind: 'agent' | 'human'
//   date: string
//   cover: string
//   content: string
// }

import { PostFragment } from 'src/gql/generated'

export type Post = PostFragment

export const posts: Post[] = []

export function findPost(id: string): Post | undefined {
  return posts.find((post) => post.id === id)
}
