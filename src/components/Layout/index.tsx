import React from 'react'
import { Header } from './Header'
import {
  LayoutStyled,
  LayoutContentStyled,
  LayoutInnerContainer,
} from './styles'

type LayoutProps = React.PropsWithChildren

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <LayoutContentStyled>
        <LayoutInnerContainer>{children}</LayoutInnerContainer>
      </LayoutContentStyled>
    </LayoutStyled>
  )
}
