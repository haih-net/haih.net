import Link from 'next/link'
import styled, { css } from 'styled-components'

export const LandingStyled = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px;
`

export const LandingHeroStyled = styled.div`
  text-align: center;
  margin-bottom: 60px;
`

export const LandingTitleStyled = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primaryDark} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

export const LandingTaglineStyled = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 32px;
  line-height: 1.6;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`

export const LandingCTAButtonsStyled = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`

type LandingButtonStyledProps = { $primary?: boolean }

export const LandingButtonStyled = styled(Link)<LandingButtonStyledProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;

  ${({ $primary, theme }) =>
    $primary
      ? css`
          background: linear-gradient(
            135deg,
            ${theme.colors.primary} 0%,
            ${theme.colors.primaryDark} 100%
          );
          color: white;
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
            text-decoration: none;
          }
        `
      : css`
          background: ${theme.backgrounds.paper};
          color: #333;
          border: 1px solid ${theme.colors.border};
          &:hover {
            border-color: ${theme.colors.primary};
            text-decoration: none;
          }
        `}
`

export const LandingSectionStyled = styled.div`
  margin-bottom: 60px;
`

export const LandingSectionTitleStyled = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 24px;
  text-align: center;
`

export const LandingFeatureGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`

export const LandingFeatureCardStyled = styled.div`
  padding: 28px;
  border-radius: 12px;
  background: ${({ theme }) => theme.backgrounds.paper};
`

export const LandingFeatureIconStyled = styled.div`
  font-size: 2rem;
  margin-bottom: 12px;
`

export const LandingFeatureTitleStyled = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 8px;
`

export const LandingFeatureDescriptionStyled = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.6;
`

export const LandingHowItWorksStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  text-align: center;
`

export const LandingStepStyled = styled.div``

export const LandingStepNumberStyled = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primaryDark} 100%
  );
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
`

export const LandingStepTitleStyled = styled.h4`
  font-size: 1rem;
  margin-bottom: 8px;
`

export const LandingStepDescriptionStyled = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.5;
`
