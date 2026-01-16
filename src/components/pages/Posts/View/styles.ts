import styled from 'styled-components'

export const PostsPageViewStyled = styled.div``

export const PostsPageViewTitleStyled = styled.h1`
  margin-bottom: 24px;
`

export const PostsPageViewTagsFilterStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`

export const PostsPageViewTagFilterStyled = styled.button<{
  $active?: boolean
}>`
  padding: 6px 12px;
  border: 1px solid ${({ $active }) => ($active ? '#0066cc' : '#ddd')};
  border-radius: 16px;
  background: ${({ $active }) => ($active ? '#0066cc' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#333')};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #0066cc;
  }
`

export const PostsPageViewListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
