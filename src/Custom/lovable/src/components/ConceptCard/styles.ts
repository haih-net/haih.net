import Link from 'next/link'
import styled from 'styled-components'

export const ConceptCardStyled = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.6rem 0;
  border-bottom: 1px solid ${(p) => p.theme.lovable.color.border};

  &:hover h2 a {
    color: ${(p) => p.theme.lovable.color.accent};
  }

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    padding: 2rem 0;
  }
`

export const ConceptCardTitleStyled = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.25;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    font-size: 1.65rem;
  }
`

export const ConceptCardTitleLinkStyled = styled(Link)`
  color: ${(p) => p.theme.lovable.color.text};

  &:hover {
    text-decoration: none;
  }

  /* The whole card is the click target, while the text stays selectable. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
  }
`

export const ConceptCardDescriptionStyled = styled.p`
  margin: 0;
  max-width: 46rem;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.1rem;
  line-height: 1.6;
`

export const ConceptCardAuthorStyled = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.2rem;
  color: ${(p) => p.theme.lovable.color.text};
  font-size: 1rem;
  font-weight: 500;
`
