import styled from 'styled-components'

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const LayoutContentStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const LayoutInnerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 16px;
  }
`
