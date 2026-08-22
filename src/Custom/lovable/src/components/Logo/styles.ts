import styled from 'styled-components'

export const LogoStyled = styled.img<{ $size: number }>`
  flex: 0 0 auto;
  display: block;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
`
