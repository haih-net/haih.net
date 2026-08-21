import styled from 'styled-components'

export const UsersListStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(p) => p.theme.lovable.color.border};
`

export const UsersJoinStyled = styled.section`
  max-width: 46rem;
  margin: 3.5rem 0 0;
`

export const UsersJoinTitleStyled = styled.h2`
  margin: 0 0 0.4rem;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.015em;
`

export const UsersJoinLeadStyled = styled.p`
  margin: 0 0 1.5rem;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.1rem;
`

export const UsersJoinFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`

export const UsersJoinActionsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
`

export const UsersJoinNoteStyled = styled.p`
  margin: 0;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 0.95rem;
`
