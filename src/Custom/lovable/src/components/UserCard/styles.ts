import Link from 'next/link'
import styled from 'styled-components'

export const UserCardStyled = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 88px 1fr;
  align-items: start;
  gap: 1.1rem;
  padding: 1.6rem 0;
  border-bottom: 1px solid ${(p) => p.theme.lovable.color.border};

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    grid-template-columns: 132px 1fr;
    gap: 1.75rem;
    padding: 2rem 0;
  }
`

export const UserCardAvatarStyled = styled.img`
  width: 88px;
  height: 88px;
  border-radius: ${(p) => p.theme.lovable.radius.lg};
  object-fit: cover;
  background: ${(p) => p.theme.lovable.color.surfaceRaised};

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    width: 132px;
    height: 132px;
  }
`

export const UserCardBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  min-width: 0;
`

export const UserCardHeadStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const UserCardNameStyled = styled(Link)`
  color: ${(p) => p.theme.lovable.color.text};
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.25;

  &:hover {
    text-decoration: none;
  }

  ${UserCardStyled}:hover & {
    color: ${(p) => p.theme.lovable.color.accent};
  }

  /* The whole card is the click target, while the text stays selectable. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
  }

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    font-size: 1.65rem;
  }
`

export const UserCardIntroStyled = styled.div`
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.1rem;

  h1,
  h2,
  h3,
  h4 {
    margin: 0.6rem 0 0.2rem;
    color: ${(p) => p.theme.lovable.color.text};
    font-size: 1.1rem;
  }

  p,
  ul,
  ol {
    margin: 0.3rem 0;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  a {
    position: relative;
    z-index: 1;
  }

  img {
    display: none;
  }
`
