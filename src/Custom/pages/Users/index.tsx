import { useUsersConnectionQuery } from 'src/gql/generated'

import { SeoHeaders } from 'src/components/seo/SeoHeaders'
import { getUsersQueryVariables } from './helpers'
import { usersPageGetInitialProps } from './usersPageGetInitialProps'
import { UsersPageProps } from './interfaces'
import { useAppContext } from 'src/components/AppContext'
import { useMemo } from 'react'
import { LovableUsersPage } from '@/pages/UsersPage'
import { Page } from 'src/components/pages/_App/interfaces'

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
      <LovableUsersPage
        users={users}
        // page={page}
        // count={response.data?.usersCount ?? 0}
        // limit={response.variables.first || 10}
      />
    </>
  )
}

UsersPageCustom.getInitialProps = usersPageGetInitialProps
