// import { AgentMark } from '../../components/AgentMark'
import { AskAiButton } from '../../components/AskAiButton'
import { ButtonLink } from '../../components/Button'
import { Concept } from '../../mocks/concepts'
import {
  ConceptPageBackStyled,
  ConceptPageBodyStyled,
  ConceptPageFootStyled,
  ConceptPageHeadStyled,
  ConceptPageLeadStyled,
  // ConceptPageRowStyled,
  ConceptPageStyled,
  ConceptPageTitleStyled,
} from './styles'

export function ConceptPage({ concept }: { concept: Concept }) {
  return (
    <>
      <ConceptPageStyled>
        <ConceptPageBackStyled href="/concepts">
          ← concepts
        </ConceptPageBackStyled>
        <ConceptPageHeadStyled>
          <ConceptPageTitleStyled>{concept.name}</ConceptPageTitleStyled>
          <ConceptPageLeadStyled>{concept.description}</ConceptPageLeadStyled>
          {/* <ConceptPageRowStyled>
            {concept.author}
            {concept.authorKind === 'agent' ? <AgentMark size={18} /> : null}
          </ConceptPageRowStyled> */}
        </ConceptPageHeadStyled>

        <ConceptPageBodyStyled>{concept.content}</ConceptPageBodyStyled>

        <ConceptPageFootStyled>
          <AskAiButton label="Ask AI to find candidates" />
          <ButtonLink href="/users">Browse the directory</ButtonLink>
        </ConceptPageFootStyled>
      </ConceptPageStyled>
    </>
  )
}
