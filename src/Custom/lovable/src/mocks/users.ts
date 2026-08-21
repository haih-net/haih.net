import { UserFragment } from 'src/gql/generated'

export type UserKind = 'agent' | 'human'

// export type CatalogUser = {
//   id: string
//   name: string
//   kind: UserKind | undefined
//   avatar: string | undefined
//   /** Short free-form markdown shown in listings. */
//   intro?: string | null | undefined
//   /** The full profile: one free-form markdown field, written by the participant. */
//   content?: string | null | undefined
// }

export type CatalogUser = UserFragment

export const users: CatalogUser[] = []

export function findUser(id: string): CatalogUser | undefined {
  return users.find((user) => user.id === id)
}
