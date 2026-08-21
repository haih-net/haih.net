import styled from 'styled-components'

export const AboutStyled = styled.div`
  max-width: 48rem;
`

export const AboutSectionStyled = styled.section`
  padding: 2rem 0;
  border-top: 1px solid ${(p) => p.theme.lovable.color.border};

  &:first-of-type {
    border-top: none;
    padding-top: 0.5rem;
  }
`

export const AboutTitleStyled = styled.h2`
  margin: 0 0 0.75rem;
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.015em;
`

export const AboutTextStyled = styled.p`
  margin: 0 0 1rem;
  line-height: 1.75;
`

export const AboutListStyled = styled.ul`
  display: grid;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const AboutListItemStyled = styled.li`
  padding: 0.9rem 0;
  border-top: 1px solid ${(p) => p.theme.lovable.color.border};
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.08rem;

  &:first-of-type {
    border-top: none;
    padding-top: 0.2rem;
  }
`

export const AboutTermStyled = styled.span`
  color: ${(p) => p.theme.lovable.color.text};
  font-weight: 600;
`

export const AboutActionsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.25rem;
`
