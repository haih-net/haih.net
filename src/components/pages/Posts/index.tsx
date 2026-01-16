import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Page } from '../_App/interfaces'
import { PostsPageView } from './View'
import { postsPageGetInitialProps } from './postsPageGetInitialProps'
import {
  usePostsConnectionQuery,
  useTagsQuery,
  PostStatus,
} from 'src/gql/generated'
import { SeoHeaders } from 'src/components/seo/SeoHeaders'

export const PostsPage: Page = () => {
  const router = useRouter()

  const selectedTagId = useMemo(() => {
    const tags = router.query.tags
    if (!tags) {
      return null
    }
    if (Array.isArray(tags)) {
      return tags[0] ?? null
    }
    return tags
  }, [router.query.tags])

  const tagsResponse = useTagsQuery()

  const postsResponse = usePostsConnectionQuery({
    variables: {
      where: { status: PostStatus.PUBLISHED },
      tagIds: selectedTagId ? [selectedTagId] : undefined,
    },
  })

  const posts = postsResponse.data?.posts
  const count = postsResponse.data?.postsCount ?? 0
  const tags = tagsResponse.data?.tags

  return (
    <>
      <SeoHeaders title="Posts" />
      <PostsPageView
        posts={posts ?? []}
        count={count}
        loading={postsResponse.loading}
        tags={tags ?? []}
        selectedTagId={selectedTagId}
      />
    </>
  )
}

PostsPage.getInitialProps = postsPageGetInitialProps
