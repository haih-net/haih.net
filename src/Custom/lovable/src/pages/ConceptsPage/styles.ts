import styled from 'styled-components'

export const ConceptsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(p) => p.theme.lovable.color.border};
`

export const ConceptsFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  max-width: 46rem;
  margin-top: 3.5rem;
`

export const ConceptsFormTitleStyled = styled.h2`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.015em;
`

export const ConceptsFormLeadStyled = styled.p`
  margin: 0 0 0.35rem;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.1rem;
`

export const ConceptsFormRowStyled = styled.div`
  display: grid;
  gap: 1.1rem;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const ConceptsFormActionsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
`

export const ConceptsFormNoteStyled = styled.p`
  margin: 0;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 0.95rem;
`
