import Link from 'next/link'
import styled from 'styled-components'

export const OpenSourceCalloutStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${(p) => p.theme.lovable.bp.lg}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
  }
`

export const OpenSourceCalloutTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 44rem;
`

export const OpenSourceCalloutTitleStyled = styled.h2`
  margin: 0;
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 1.5rem;
  font-weight: 600;
`

export const OpenSourceCalloutTextBodyStyled = styled.p`
  margin: 0;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.15rem;
`

export const OpenSourceCalloutReposStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const OpenSourceCalloutRepoStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  color: ${(p) => p.theme.lovable.color.text};
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 1.02rem;

  &:hover {
    color: ${(p) => p.theme.lovable.color.accent};
    text-decoration: none;
  }
`

export const OpenSourceCalloutRepoNoteStyled = styled.span`
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 0.95rem;
`
