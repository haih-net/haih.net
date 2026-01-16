import { PostFragment, TagFragment } from 'src/gql/generated'

export type PostsPageViewProps = {
  posts: PostFragment[]
  count: number
  loading?: boolean
  tags?: TagFragment[]
  selectedTagId?: string | null
}
