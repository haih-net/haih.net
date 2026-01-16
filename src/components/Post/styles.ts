import styled, { css } from 'styled-components'

type PostVariant = 'list' | 'full'

type PostStyledProps = {
  $variant: PostVariant
}

export const PostStyled = styled.article<PostStyledProps>`
  ${({ $variant }) =>
    $variant === 'list' &&
    css`
      padding: 16px;
      border: 1px solid #eee;
      border-radius: 8px;
    `}
`

export const PostBannerStyled = styled.div`
  background: #fff3cd;
  border: 1px solid #ffc107;
  color: #856404;
  padding: 12px 16px;
  border-radius: 4px;
  margin-bottom: 20px;
`

type PostTitleStyledProps = {
  $variant: PostVariant
}

export const PostTitleStyled = styled.h2<PostTitleStyledProps>`
  margin: 0 0 ${({ $variant }) => ($variant === 'list' ? '8px' : '16px')};
  font-size: ${({ $variant }) => ($variant === 'list' ? '1.25rem' : '2rem')};

  ${({ $variant }) =>
    $variant === 'list' &&
    css`
      cursor: pointer;

      &:hover {
        color: #0066cc;
      }
    `}
`

export const PostDescriptionStyled = styled.p`
  margin: 0 0 12px;
  color: #666;
`

export const PostMetaStyled = styled.div`
  display: flex;
  gap: 16px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 24px;
`

export const PostAuthorStyled = styled.span``

export const PostDateStyled = styled.span``

export const PostIntroStyled = styled.p`
  font-size: 1.125rem;
  color: #444;
  margin-bottom: 24px;
  font-style: italic;
`

export const PostContentStyled = styled.div`
  line-height: 1.6;
`

export const PostTagsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`

export const PostTagStyled = styled.span`
  padding: 4px 8px;
  background: #f0f0f0;
  border-radius: 4px;
  font-size: 0.75rem;
  color: #666;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }
`
