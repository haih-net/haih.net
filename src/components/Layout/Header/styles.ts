import Link from 'next/link'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 12px 16px;
  }
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    opacity: 0.8;
    text-decoration: none;
  }
`

export const LogoIcon = styled.svg`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.primary};
`

export const SiteTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`
