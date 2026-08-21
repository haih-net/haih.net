import { useMemo } from 'react'
import { PostPageProps } from './interfaces'
import { postPageGetInitialProps } from './postPageGetInitialProps'
import { PostStatus, usePostQuery } from 'src/gql/generated'
import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { JsonLd } from 'src/components/seo/JsonLd'
import { createBlogPosting } from 'src/components/seo/JsonLd/helpers'
import { createPostLink } from 'src/components/Link/Post'
import { Page } from 'src/components/pages/_App/interfaces'
import { LovablePostPage } from '@/pages/PostPage'
import { useAppContext } from 'src/components/AppContext'
import { useBoolean } from 'src/hooks/useBoolean'
import { PostEditForm } from 'src/components/pages/Posts/Post/Form'
import { Button } from 'src/ui-kit/Button'

export const PostPageCustom: Page<PostPageProps> = ({ postId, siteOrigin }) => {
  const response = usePostQuery({
    skip: !postId,
    variables: {
      where: {
        id: postId,
      },
    },
  })

  const post = response.data?.object

  const searchable = post?.status === PostStatus.PUBLISHED ? true : false

  const blogPostingSchema = useMemo(() => {
    if (!post) {
      return null
    }

    return createBlogPosting({
      headline: post.title || '',
      description: post.description || undefined,
      datePublished: post.createdAt,
      dateModified: post.updatedAt,
      author: post.CreatedBy
        ? {
            '@type': 'Person',
            name: post.CreatedBy.fullname || post.CreatedBy.username || '',
          }
        : undefined,
    })
  }, [post])

  const { user: currentUser } = useAppContext()

  const [inEditMode, startEditing, stopEditing] = useBoolean()

  const canEdit =
    currentUser && (currentUser.sudo || post?.createdById === currentUser.id)

  if (!post) {
    return null
  }

  return inEditMode ? (
    <PostEditForm
      post={post}
      cancelHandler={stopEditing}
      parentId={undefined}
    />
  ) : (
    <>
      <SeoHeaders
        title={post.title || 'Post'}
        description={post.description}
        noindex={!searchable}
        nofollow={!searchable}
        siteOrigin={siteOrigin}
        canonical={createPostLink(post)}
      />
      {blogPostingSchema && <JsonLd data={blogPostingSchema} />}

      {canEdit && <Button onClick={startEditing}>Edit</Button>}

      <LovablePostPage post={post} />
    </>
  )
}

PostPageCustom.getInitialProps = postPageGetInitialProps
