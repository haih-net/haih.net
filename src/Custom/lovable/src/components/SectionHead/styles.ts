import styled from 'styled-components'

export const SectionHeadStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.75rem;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
  }
`

export const SectionHeadTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 46rem;
`

export const SectionHeadKickerStyled = styled.span`
  color: ${(p) => p.theme.lovable.color.accent};
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const SectionHeadTitleStyled = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.015em;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    font-size: 2.6rem;
  }
`

export const SectionHeadLeadStyled = styled.p`
  margin: 0;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.12rem;
`

export const SectionHeadAsideStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`
