import type { ReactNode } from 'react'
import { Header } from '../Header'
import { LayoutMainStyled, LayoutStyled } from './styles'
import { GlobalStyle } from '../GlobalStyle'

export function LovableLayout({ children }: { children: ReactNode }) {
  return (
    <LayoutStyled>
      <GlobalStyle />
      <Header />
      <LayoutMainStyled>{children}</LayoutMainStyled>
    </LayoutStyled>
  )
}
