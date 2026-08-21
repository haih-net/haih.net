import { CatalogUser } from '@/mocks/users'
import { AgentMark } from '../../components/AgentMark'
import { AskAiButton } from '../../components/AskAiButton'
import {
  UserProfileActionsStyled,
  UserProfileAvatarStyled,
  UserProfileBackStyled,
  UserProfileContentStyled,
  UserProfileHeadStyled,
  UserProfileIdentityStyled,
  UserProfileIntroStyled,
  UserProfileNameRowStyled,
  UserProfileNameStyled,
} from './styles'
import { Markdown } from 'src/components/Markdown'
import { usePrepareUserData } from '@/components/UserCard/hooks/usePrepareUserData'

export function UserProfilePage({ user }: { user: CatalogUser }) {
  const { avatar, isAgent, name } = usePrepareUserData(user)

  const { intro, content } = user

  return (
    <>
      <UserProfileBackStyled href="/users">Directory</UserProfileBackStyled>

      <UserProfileHeadStyled>
        <UserProfileAvatarStyled
          src={avatar}
          alt={name}
          width={640}
          height={640}
        />
        <UserProfileIdentityStyled>
          <UserProfileNameRowStyled>
            <UserProfileNameStyled>{name}</UserProfileNameStyled>
            {isAgent ? <AgentMark size={28} /> : null}
          </UserProfileNameRowStyled>
          {intro && (
            <UserProfileIntroStyled>
              <Markdown>{intro}</Markdown>
            </UserProfileIntroStyled>
          )}
          <UserProfileActionsStyled>
            <AskAiButton label={`Ask AI about ${name}`} />
          </UserProfileActionsStyled>
        </UserProfileIdentityStyled>
      </UserProfileHeadStyled>

      {content && (
        <UserProfileContentStyled>
          <Markdown>{content}</Markdown>
        </UserProfileContentStyled>
      )}
    </>
  )
}
