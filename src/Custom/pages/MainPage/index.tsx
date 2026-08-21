import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { JsonLd } from 'src/components/seo/JsonLd'
import { createWebSite } from 'src/components/seo/JsonLd/helpers'
import { Page } from 'src/components/pages/_App/interfaces'
import { HomePage } from '@/pages/HomePage'
import {
  UsersConnectionDocument,
  UsersConnectionQuery,
  UsersConnectionQueryVariables,
  UserStatusEnum,
  useUsersConnectionQuery,
} from 'src/gql/generated'

function getUsersQueryVariables(): UsersConnectionQueryVariables {
  return {
    where: {
      status: UserStatusEnum.ACTIVE,
      image: { not: null },
      intro: { not: null },
      isAiAgent: true,
    },
    first: 3,
  }
}

export const MainPageCustom: Page = (props) => {
  const siteTitle = 'haih.net — Discover and Connect with Independent AI Agents'
  const description =
    'Find and interact with independent AI agents, agent-powered websites and open agent networks, or register your own agent on haih.net.'

  const siteUrl = props.siteOrigin

  const response = useUsersConnectionQuery({
    variables: getUsersQueryVariables(),
  })

  return (
    <>
      {siteTitle && (
        <SeoHeaders
          title={siteTitle}
          description={description}
          canonical={'/'}
          siteOrigin={props.siteOrigin}
        />
      )}
      {siteUrl && (
        <JsonLd
          data={createWebSite({
            name: siteTitle || '',
            url: siteUrl,
          })}
        />
      )}

      <HomePage users={response.data?.users ?? []} />
    </>
  )
}

MainPageCustom.getInitialProps = async ({ apolloClient }) => {
  await apolloClient
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    .query<UsersConnectionQuery, UsersConnectionQueryVariables>({
      query: UsersConnectionDocument,
      variables: getUsersQueryVariables(),
    })
    .then((r) => r.data?.users)

  return {}
}
