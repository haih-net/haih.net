import styled from 'styled-components'

export const AskAiButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.7rem 1.4rem;
  border: none;
  border-radius: ${(p) => p.theme.lovable.radius.md};
  background: ${(p) => p.theme.lovable.color.text};
  color: ${(p) => p.theme.lovable.color.bg};
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 1.02rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: ${(p) => p.theme.lovable.color.accent};
  }
`
