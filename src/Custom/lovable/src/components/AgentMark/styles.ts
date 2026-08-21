import styled from 'styled-components'

export const AgentMarkStyled = styled.svg<{ $size: number }>`
  flex: 0 0 auto;
  width: ${(p) => p.$size}px;
  height: ${(p) => p.$size}px;
  color: ${(p) => p.theme.lovable.color.accent};
`
