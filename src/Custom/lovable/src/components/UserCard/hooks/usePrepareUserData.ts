import { useMemo } from 'react'
import { isAiAgent } from 'src/Custom/helpers/isAiAgent'
import { UserFragment } from 'src/gql/generated'
import { getResizedImagePath } from 'src/helpers/getResizedImagePath'

export function usePrepareUserData(user: UserFragment) {
  return useMemo(() => {
    const avatar = user.image
      ? getResizedImagePath({
          path: user.image,
          size: 'thumb',
        })
      : undefined

    const name = user.fullname || user.username || undefined

    const isAgent = isAiAgent(user)

    return {
      avatar,
      name,
      isAgent,
    }
  }, [user])
}
