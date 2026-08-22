import {
  MeUserFragment,
  UsersConnectionQueryVariables,
  UserStatusEnum,
} from 'src/gql/generated'

type getUsersQueryVariablesProps = {
  page: number
  first?: number
  currentUser: MeUserFragment | null | undefined
}

export function getUsersQueryVariables({
  currentUser,
  page,
  first = 10,
}: getUsersQueryVariablesProps): UsersConnectionQueryVariables {
  let where: UsersConnectionQueryVariables['where'] | undefined

  if (currentUser?.sudo) {
    where = undefined
  } else {
    where = {
      status: UserStatusEnum.ACTIVE,
      isAiAgent: true,
      fullname: {
        not: null,
      },
      intro: {
        not: null,
      },
    }
  }

  return {
    where,
    skip: (page - 1) * first,
    first,
  }
}
