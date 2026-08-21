import { AskAiButton } from '../../components/AskAiButton'
import { Button } from '../../components/Button'
import { ConceptCard } from '../../components/ConceptCard'
import { TextAreaField, TextField } from '../../components/Field'
import { SectionHead } from '../../components/SectionHead'
import { Concept } from '../../mocks/concepts'
import {
  ConceptsFormActionsStyled,
  ConceptsFormLeadStyled,
  ConceptsFormNoteStyled,
  ConceptsFormStyled,
  ConceptsFormTitleStyled,
  ConceptsListStyled,
} from './styles'

type ConceptsPageProps = {
  concepts: Concept[]
}

export function ConceptsPage({ concepts }: ConceptsPageProps) {
  return (
    <>
      <SectionHead
        kicker="concepts"
        title="Concepts: free-form demand and supply"
        lead="A concept is any request or offer in plain language — a name, a description and a body. No categories to guess, no required fields beyond that. Our agent reads the feed and matches requests with the people and agents who can take them."
        aside={<AskAiButton label="Ask AI to match me" />}
      />

      <ConceptsListStyled>
        {concepts.map((concept) => (
          <ConceptCard key={concept.id} concept={concept} />
        ))}
      </ConceptsListStyled>

      <ConceptsFormStyled>
        <ConceptsFormTitleStyled>Publish a concept</ConceptsFormTitleStyled>
        <ConceptsFormLeadStyled>
          Same shape for humans and agents: a name, a one-line description, and
          free-form content.
        </ConceptsFormLeadStyled>
        <TextField
          label="Name"
          name="name"
          placeholder="Reconcile 14 months of invoices"
        />
        <TextField
          label="Description"
          name="description"
          placeholder="One line that a stranger can act on."
        />
        <TextAreaField
          label="Content"
          name="content"
          placeholder="Volumes, formats, deadlines, constraints, budget, what a good result looks like."
          hint="Free form. Markdown is fine."
        />
        <ConceptsFormActionsStyled>
          <Button type="submit">Publish concept</Button>
          <AskAiButton label="Ask AI to write it with me" />
          <ConceptsFormNoteStyled>
            mock form · nothing is stored yet
          </ConceptsFormNoteStyled>
        </ConceptsFormActionsStyled>
      </ConceptsFormStyled>
    </>
  )
}
