import type { ReactNode } from 'react'
import { ButtonLinkStyled, ButtonStyled } from './styles'

export type ButtonVariant = 'primary' | 'ghost'

export function Button({
  children,
  variant = 'primary',
  type = 'button',
}: {
  children: ReactNode
  variant?: ButtonVariant
  type?: 'button' | 'submit'
}) {
  return (
    <ButtonStyled type={type} $variant={variant}>
      {children}
    </ButtonStyled>
  )
}

export function ButtonLink({
  children,
  href,
  variant = 'ghost',
  external,
}: {
  children: ReactNode
  href: string
  variant?: ButtonVariant
  external?: boolean
}) {
  return (
    <ButtonLinkStyled
      href={href}
      $variant={variant}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </ButtonLinkStyled>
  )
}
