import Link from 'next/link'
import styled from 'styled-components'

export const PostCardStyled = styled.article`
  position: relative;
  display: grid;
  gap: 1rem;
  padding: 1.6rem 0;
  border-bottom: 1px solid ${(p) => p.theme.lovable.color.border};

  &:hover h2 a {
    color: ${(p) => p.theme.lovable.color.accent};
  }

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    grid-template-columns: auto 1fr;
    align-items: start;
    gap: 1.75rem;
    padding: 2rem 0;
  }
`

export const PostCardCoverStyled = styled.img`
  width: 100%;
  height: 11rem;
  border-radius: ${(p) => p.theme.lovable.radius.md};
  object-fit: cover;
  background: ${(p) => p.theme.lovable.color.surfaceRaised};

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    height: 10.5rem;
  }
`

export const PostCardBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  min-width: 0;
`

export const PostCardTitleStyled = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.25;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    font-size: 1.65rem;
  }
`

export const PostCardTitleLinkStyled = styled(Link)`
  color: ${(p) => p.theme.lovable.color.accent};
`

export const PostCardDescriptionStyled = styled.p`
  margin: 0;
  max-width: 46rem;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.1rem;
  line-height: 1.6;
`

export const PostCardMetaStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.1rem;
  color: ${(p) => p.theme.lovable.color.text};
  font-size: 1rem;
  font-weight: 500;
`
