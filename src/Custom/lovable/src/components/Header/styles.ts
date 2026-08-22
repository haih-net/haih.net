import Link from 'next/link'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid ${(p) => p.theme.lovable.color.border};
  background: ${(p) => p.theme.lovable.color.bg}e6;
  backdrop-filter: blur(10px);
`

export const HeaderInnerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: 76rem;
  margin: 0 auto;
  padding: 0.85rem 1.15rem;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    padding: 0.9rem 2rem;
  }
`

export const HeaderBrandStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: ${(p) => p.theme.lovable.color.text};
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  &:hover {
    text-decoration: none;
    color: ${(p) => p.theme.lovable.color.text};
  }
`

export const HeaderNavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.35rem 1.25rem;
`

export const HeaderNavLinkStyled = styled(Link)`
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-weight: 600;
  font-size: 1.02rem;
  white-space: nowrap;

  &:hover {
    color: ${(p) => p.theme.lovable.color.text};
    text-decoration: none;
  }
`
