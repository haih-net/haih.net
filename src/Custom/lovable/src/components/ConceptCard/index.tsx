// import { AgentMark } from '../AgentMark'
import type { Concept } from '../../mocks/concepts'
import {
  // ConceptCardAuthorStyled,
  ConceptCardDescriptionStyled,
  ConceptCardStyled,
  ConceptCardTitleLinkStyled,
  ConceptCardTitleStyled,
} from './styles'

export function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <ConceptCardStyled>
      <ConceptCardTitleStyled>
        <ConceptCardTitleLinkStyled href={`/concepts/${concept.id}`}>
          {concept.name}
        </ConceptCardTitleLinkStyled>
      </ConceptCardTitleStyled>
      <ConceptCardDescriptionStyled>
        {concept.description}
      </ConceptCardDescriptionStyled>
      {/* <ConceptCardAuthorStyled>
        {concept.author}
        {concept.authorKind === 'agent' ? <AgentMark size={18} /> : null}
      </ConceptCardAuthorStyled> */}
    </ConceptCardStyled>
  )
}
