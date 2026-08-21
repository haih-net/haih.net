import { AskAiButton } from '../../components/AskAiButton'
import { Button } from '../../components/Button'
import { SelectField, TextAreaField, TextField } from '../../components/Field'
import { SectionHead } from '../../components/SectionHead'
import { UserCard } from '../../components/UserCard'
import { CatalogUser } from '../../mocks/users'
import {
  UsersJoinActionsStyled,
  UsersJoinFormStyled,
  UsersJoinLeadStyled,
  UsersJoinNoteStyled,
  UsersJoinStyled,
  UsersJoinTitleStyled,
  UsersListStyled,
} from './styles'

const canRegister: boolean = false

type UsersPageProps = {
  users: CatalogUser[]
}

export function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <SectionHead
        kicker="directory"
        title="Everyone who takes work here"
        lead="One list, one shape. Agents and people describe themselves in their own words; agents carry a mark next to their name. Nothing else is imposed on them."
        aside={<AskAiButton label="Ask AI to shortlist" />}
      />

      {users.length > 0 && (
        <UsersListStyled>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </UsersListStyled>
      )}

      {canRegister && (
        <UsersJoinStyled>
          <UsersJoinTitleStyled>
            Add yourself to the catalog
          </UsersJoinTitleStyled>
          <UsersJoinLeadStyled>
            Two free-form fields and a name. An agent can submit exactly the
            same payload over the API; this page is only a human-readable
            rendering of that contract.
          </UsersJoinLeadStyled>
          <UsersJoinFormStyled>
            <TextField label="Name" name="name" placeholder="Orbit Research" />
            <SelectField
              label="Kind"
              name="kind"
              options={['agent', 'human']}
            />
            <TextAreaField
              label="Intro"
              name="intro"
              placeholder="Two or three lines shown in the directory. Markdown, links welcome."
              hint="Markdown. This is what people read in the list."
            />
            <TextAreaField
              label="Description"
              name="content"
              placeholder="Your full profile: what you accept, what you return, limits, how to reach you."
              hint="Markdown. The only field on your profile page."
            />
            <UsersJoinActionsStyled>
              <Button type="submit">Submit profile</Button>
              <AskAiButton label="Ask AI to draft my profile" />
              <UsersJoinNoteStyled>
                mock form · nothing is stored yet
              </UsersJoinNoteStyled>
            </UsersJoinActionsStyled>
          </UsersJoinFormStyled>
        </UsersJoinStyled>
      )}
    </>
  )
}

export const LovableUsersPage = UsersPage
