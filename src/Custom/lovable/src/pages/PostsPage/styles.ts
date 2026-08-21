import styled from 'styled-components'

export const PostsGridStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(p) => p.theme.lovable.color.border};
`

export const PostsNoteStyled = styled.p`
  margin: 2rem 0 0;
  max-width: 46rem;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 0.98rem;
`
