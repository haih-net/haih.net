import { useUsersConnectionQuery } from 'src/gql/generated'

import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { getUsersQueryVariables } from './helpers'
import { usersPageGetInitialProps } from './usersPageGetInitialProps'
import { UsersPageProps } from './interfaces'
import { useAppContext } from 'src/components/AppContext'
import { useMemo } from 'react'
import { LovableUsersPage } from '@/pages/UsersPage'
import { Page } from 'src/components/pages/_App/interfaces'
import { UsersView } from 'src/components/pages/Users/View'

export const UsersPageCustom: Page<UsersPageProps> = ({ page, siteOrigin }) => {
  const { user: currentUser } = useAppContext()

  const response = useUsersConnectionQuery({
    variables: getUsersQueryVariables({ currentUser, page }),
  })

  const users = useMemo(
    () => response.data?.users || [],
    [response.data?.users],
  )

  return (
    <>
      <SeoHeaders
        title="Users"
        siteOrigin={siteOrigin}
        canonical={`/users${page > 1 ? `?page=${page}` : ''}`}
      />

      {currentUser?.sudo ? (
        <UsersView
          users={users}
          page={page}
          count={response.data?.usersCount ?? 0}
          limit={response.variables.first || 10}
        />
      ) : (
        <LovableUsersPage
          users={users}
          page={page}
          count={response.data?.usersCount ?? 0}
        />
      )}
    </>
  )
}

UsersPageCustom.getInitialProps = usersPageGetInitialProps
