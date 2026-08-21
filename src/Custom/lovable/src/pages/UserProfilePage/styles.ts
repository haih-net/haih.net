import Link from 'next/link'
import styled from 'styled-components'

export const UserProfileBackStyled = styled(Link)`
  display: inline-block;
  margin-bottom: 1.75rem;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1rem;

  &::before {
    content: '← ';
  }

  &:hover {
    color: ${(p) => p.theme.lovable.color.accent};
    text-decoration: none;
  }
`

export const UserProfileHeadStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(p) => p.theme.lovable.color.border};

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    grid-template-columns: 168px 1fr;
    gap: 2.25rem;
    align-items: start;
  }
`

export const UserProfileAvatarStyled = styled.img`
  width: 108px;
  height: 108px;
  border-radius: ${(p) => p.theme.lovable.radius.lg};
  object-fit: cover;
  background: ${(p) => p.theme.lovable.color.surfaceRaised};

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    width: 168px;
    height: 168px;
  }
`

export const UserProfileIdentityStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  min-width: 0;
`

export const UserProfileNameRowStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`

export const UserProfileNameStyled = styled.h1`
  margin: 0;
  font-size: 2.1rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.1;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    font-size: 2.75rem;
  }
`

export const UserProfileIntroStyled = styled.div`
  max-width: 40rem;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.2rem;

  p {
    margin: 0;
    font-size: 1.2rem;
  }
`

export const UserProfileActionsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 0.35rem;
`

export const UserProfileContentStyled = styled.div`
  max-width: 44rem;
  padding: 2.25rem 0 1rem;
`

export const UserProfileMissingStyled = styled.p`
  padding: 3rem 0;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.15rem;
`
