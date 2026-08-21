import Link from 'next/link'
import styled from 'styled-components'

export const HomeHeroStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* min-height: calc(100vh - 61px); */
  padding: 1.25rem 0 2rem;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    gap: 1.25rem;
    padding: 2.5rem 0 3rem;
  }
`

export const HomeHeroTitleStyled = styled.h1`
  margin: 0;
  max-width: 50rem;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.03em;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    font-size: 3.8rem;
  }
`

export const HomeHeroLeadStyled = styled.p`
  margin: 0;
  max-width: 42rem;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.15rem;
  line-height: 1.45;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    font-size: 1.35rem;
  }
`

export const HomeAskStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding: 0.85rem;
  border: 1px solid ${(p) => p.theme.lovable.color.border};
  border-radius: ${(p) => p.theme.lovable.radius.lg};
  background: ${(p) => p.theme.lovable.color.bg};
  box-shadow: 0 1px 2px rgba(16, 17, 20, 0.04);

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    gap: 1rem;
    padding: 1rem;
  }
`

export const HomeAskLabelStyled = styled.label`
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

export const HomeAskInputStyled = styled.textarea`
  width: 100%;
  min-height: 6.5rem;
  padding: 0.7rem 0.6rem;
  border: none;
  border-radius: ${(p) => p.theme.lovable.radius.md};
  background: ${(p) => p.theme.lovable.color.surfaceRaised};
  color: ${(p) => p.theme.lovable.color.text};
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 1.15rem;
  line-height: 1.45;
  resize: none;

  &::placeholder {
    color: ${(p) => p.theme.lovable.color.textMuted};
  }

  &:focus {
    outline: 2px solid ${(p) => p.theme.lovable.color.accentDim};
    outline-offset: 2px;
  }

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    min-height: 7.5rem;
    padding: 0.9rem 0.85rem;
    font-size: 1.25rem;
  }
`

export const HomeAskButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  min-height: 52px;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: ${(p) => p.theme.lovable.radius.md};
  background: ${(p) => p.theme.lovable.color.accent};
  color: ${(p) => p.theme.lovable.color.bg};
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: ${(p) => p.theme.lovable.color.text};
  }

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    width: auto;
    min-height: 56px;
    padding: 0.85rem 2rem;
    font-size: 1.15rem;
  }
`

export const HomeAskHintStyled = styled.p`
  margin: 0;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1rem;
  line-height: 1.4;
`

export const HomeHeroRegisterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
  margin-top: auto;
  padding-top: 1.5rem;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.05rem;
  line-height: 1.4;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    flex-direction: row;
    align-items: center;
    gap: 0.9rem;
    font-size: 1.08rem;
  }
`

export const HomeSectionStyled = styled.section`
  padding: 3rem 0;
  border-top: 1px solid ${(p) => p.theme.lovable.color.border};

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    padding: 4rem 0;
  }
`

export const HomeSubTitleStyled = styled.h2`
  margin: 0 0 1.25rem;
  font-size: 1.9rem;
  font-weight: 600;
  letter-spacing: -0.025em;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    font-size: 2.4rem;
  }
`

export const HomeSectionLeadStyled = styled.p`
  margin: 0 0 1.5rem;
  max-width: 44rem;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.15rem;
  line-height: 1.45;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    font-size: 1.3rem;
  }
`

export const HomeListStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export const HomeMoreLinkStyled = styled(Link)`
  display: inline-block;
  margin-top: 1.75rem;
  color: ${(p) => p.theme.lovable.color.accent};
  font-size: 1.1rem;
  font-weight: 600;
`
