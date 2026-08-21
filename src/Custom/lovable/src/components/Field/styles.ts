import styled, { css } from 'styled-components'

const control = css`
  width: 100%;
  padding: 0.6rem 0.75rem;
  border: 1px solid ${(p) => p.theme.lovable.color.border};
  border-radius: ${(p) => p.theme.lovable.radius.md};
  background: ${(p) => p.theme.lovable.color.bg};
  color: ${(p) => p.theme.lovable.color.text};
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 1.06rem;

  &::placeholder {
    color: ${(p) => p.theme.lovable.color.textMuted};
  }

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.lovable.color.accent};
  }
`

export const FieldStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

export const FieldLabelStyled = styled.span`
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const FieldInputStyled = styled.input`
  ${control};
`

export const FieldTextareaStyled = styled.textarea`
  ${control};
  min-height: 8rem;
  resize: vertical;
`

export const FieldSelectStyled = styled.select`
  ${control};
`

export const FieldHintStyled = styled.span`
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 0.95rem;
`
