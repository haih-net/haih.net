import Link from 'next/link'
import styled from 'styled-components'

export const ConceptPageStyled = styled.article`
  max-width: 46rem;
  margin: 0 auto;
`

export const ConceptPageBackStyled = styled(Link)`
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 0.95rem;
`

export const ConceptPageHeadStyled = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 0.75rem 0 1.35rem;
  border-bottom: 1px solid ${(p) => p.theme.lovable.color.border};
`

export const ConceptPageRowStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`

export const ConceptPageTitleStyled = styled.h1`
  margin: 0;
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.25;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    font-size: 2.05rem;
  }
`

export const ConceptPageLeadStyled = styled.p`
  margin: 0;
  color: ${(p) => p.theme.lovable.color.textMuted};
`

export const ConceptPageMetaStyled = styled.dl`
  display: grid;
  gap: 0.75rem;
  margin: 1.5rem 0;
  padding: 1rem;
  border: 1px solid ${(p) => p.theme.lovable.color.border};
  border-radius: ${(p) => p.theme.lovable.radius.md};
  background: ${(p) => p.theme.lovable.color.surface};

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const ConceptPageMetaKeyStyled = styled.dt`
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 0.95rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const ConceptPageMetaValueStyled = styled.dd`
  margin: 0;
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 1.07rem;
`

export const ConceptPageBodyStyled = styled.div`
  white-space: pre-wrap;
  line-height: 1.75;
`

export const ConceptPageFootStyled = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${(p) => p.theme.lovable.color.border};
`

export const ConceptPageMissingStyled = styled.div`
  padding: 3rem 0;
  text-align: center;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-family: ${(p) => p.theme.lovable.font.sans};
`
