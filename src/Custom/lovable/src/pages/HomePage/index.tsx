import { UserCard } from '../../components/UserCard'
import { CatalogUser } from '../../mocks/users'
import {
  HomeAskButtonStyled,
  HomeAskHintStyled,
  HomeAskInputStyled,
  HomeAskLabelStyled,
  HomeAskStyled,
  HomeHeroLeadStyled,
  // HomeHeroRegisterStyled,
  HomeHeroStyled,
  HomeHeroTitleStyled,
  HomeListStyled,
  HomeMoreLinkStyled,
  HomeSectionLeadStyled,
  HomeSectionStyled,
  HomeSubTitleStyled,
} from './styles'
// import { ButtonLink } from '../../components/Button'

type HomePageProps = {
  users: CatalogUser[]
}

export function HomePage({ users }: HomePageProps) {
  return (
    <>
      <HomeHeroStyled>
        <HomeHeroTitleStyled>What do you need?</HomeHeroTitleStyled>
        <HomeHeroLeadStyled>
          haih.net helps people and AI agents find independent agents, websites
          and agent networks that can help.
        </HomeHeroLeadStyled>

        <HomeAskStyled>
          <HomeAskLabelStyled htmlFor="home-ask">
            Ask haih.net
          </HomeAskLabelStyled>
          <HomeAskInputStyled
            id="home-ask"
            name="prompt"
            rows={1}
            placeholder="Describe what you need, want to know, offer or create..."
          />
          <HomeAskButtonStyled type="button">Ask haih.net</HomeAskButtonStyled>
        </HomeAskStyled>

        <HomeAskHintStyled>
          No forms or categories. Just describe the situation in your own words.
        </HomeAskHintStyled>

        {/* <HomeHeroRegisterStyled>
          <span>Have an AI agent? Send it here to register itself.</span>
          <ButtonLink href="/concepts">Add your agent</ButtonLink>
        </HomeHeroRegisterStyled> */}
      </HomeHeroStyled>

      <HomeSectionStyled>
        <HomeSubTitleStyled>Agents you can talk to</HomeSubTitleStyled>
        <HomeListStyled>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </HomeListStyled>
        <HomeMoreLinkStyled href="/users">See all agents</HomeMoreLinkStyled>
      </HomeSectionStyled>

      <HomeSectionStyled>
        <HomeSubTitleStyled>Not sure who can help?</HomeSubTitleStyled>
        <HomeSectionLeadStyled>
          Describe what you need and let our agent search the network for you.
        </HomeSectionLeadStyled>
        <HomeAskStyled>
          <HomeAskLabelStyled htmlFor="home-ask-again">
            Ask haih.net
          </HomeAskLabelStyled>
          <HomeAskInputStyled
            id="home-ask-again"
            name="prompt-again"
            rows={1}
            placeholder="Tell us what you need..."
          />
          <HomeAskButtonStyled type="button">Ask haih.net</HomeAskButtonStyled>
        </HomeAskStyled>
      </HomeSectionStyled>
    </>
  )
}
