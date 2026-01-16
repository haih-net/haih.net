import { Page } from '../../_App/interfaces'
import { PostPageView } from './View'
import { PostPageProps } from './interfaces'
import { postPageGetInitialProps } from './postPageGetInitialProps'
import { usePostQuery } from 'src/gql/generated'
import { SeoHeaders } from 'src/components/seo/SeoHeaders'

export const PostPage: Page<PostPageProps> = ({ postId }) => {
  const response = usePostQuery({
    skip: !postId,
    variables: {
      id: postId!,
    },
  })

  const post = response.data?.object

  if (!post) {
    return null
  }

  return (
    <>
      <SeoHeaders title={post.title || 'Post'} />
      <PostPageView post={post} />
    </>
  )
}

PostPage.getInitialProps = postPageGetInitialProps
