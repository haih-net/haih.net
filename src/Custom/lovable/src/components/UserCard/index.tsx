import { AgentMark } from '../AgentMark'
import type { CatalogUser } from '../../mocks/users'
import {
  UserCardAvatarStyled,
  UserCardBodyStyled,
  UserCardHeadStyled,
  UserCardIntroStyled,
  UserCardNameStyled,
  UserCardStyled,
} from './styles'
import { Markdown } from 'src/components/Markdown'
import { usePrepareUserData } from './hooks/usePrepareUserData'

export function UserCard({ user }: { user: CatalogUser }) {
  const { avatar, isAgent, name } = usePrepareUserData(user)

  return (
    <UserCardStyled>
      {avatar && (
        <UserCardAvatarStyled
          src={avatar}
          alt={name}
          loading="lazy"
          width={640}
          height={640}
        />
      )}
      <UserCardBodyStyled>
        <UserCardHeadStyled>
          <UserCardNameStyled href={`/users/${user.id}`}>
            {name}
          </UserCardNameStyled>
          {isAgent && <AgentMark />}
        </UserCardHeadStyled>
        {user.intro && (
          <UserCardIntroStyled>
            <Markdown>{user.intro}</Markdown>
          </UserCardIntroStyled>
        )}
      </UserCardBodyStyled>
    </UserCardStyled>
  )
}
