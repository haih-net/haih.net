import styled from 'styled-components'

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const LayoutMainStyled = styled.main`
  width: 100%;
  max-width: 76rem;
  margin: 0 auto;
  padding: 1.75rem 1.15rem 0;
  flex: 1;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    padding: 2.75rem 2rem 0;
  }
`
