import Link from 'next/link'
import styled, { css } from 'styled-components'

const base = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0.7rem 1.4rem;
  border-radius: ${(p) => p.theme.lovable.radius.md};
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 1.02rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;

  &:hover {
    text-decoration: none;
  }
`

const variantStyles = css<{ $variant: 'primary' | 'ghost' }>`
  border: 1px solid
    ${(p) =>
      p.$variant === 'primary'
        ? p.theme.lovable.color.accent
        : p.theme.lovable.color.borderStrong};
  background: ${(p) =>
    p.$variant === 'primary' ? p.theme.lovable.color.accent : 'transparent'};
  color: ${(p) =>
    p.$variant === 'primary'
      ? p.theme.lovable.color.bg
      : p.theme.lovable.color.text};

  &:hover {
    background: ${(p) =>
      p.$variant === 'primary'
        ? p.theme.lovable.color.text
        : p.theme.lovable.color.surfaceRaised};
    border-color: ${(p) =>
      p.$variant === 'primary'
        ? p.theme.lovable.color.text
        : p.theme.lovable.color.text};
  }
`

export const ButtonStyled = styled.button<{ $variant: 'primary' | 'ghost' }>`
  ${base};
  ${variantStyles};
`

export const ButtonLinkStyled = styled(Link)<{ $variant: 'primary' | 'ghost' }>`
  ${base};
  ${variantStyles};
`
