import { Page } from '../_App/interfaces'
import {
  PostsConnectionDocument,
  PostsConnectionQuery,
  PostsConnectionQueryVariables,
  PostStatus,
} from 'src/gql/generated'

export const postsPageGetInitialProps: Page['getInitialProps'] = async ({
  apolloClient,
}) => {
  await apolloClient.query<PostsConnectionQuery, PostsConnectionQueryVariables>(
    {
      query: PostsConnectionDocument,
      variables: {
        where: { status: PostStatus.PUBLISHED },
      },
    },
  )

  return {}
}
