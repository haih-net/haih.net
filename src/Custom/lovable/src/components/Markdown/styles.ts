import styled, { css } from 'styled-components'

export const lovableMarkdownStyles = css`
  font-size: 1.1rem;
  line-height: 1.75;

  h1,
  h2,
  h3,
  h4 {
    margin: 2rem 0 0.75rem;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.015em;
  }

  h1 {
    font-size: 2.1rem;
  }

  h2 {
    font-size: 1.65rem;
    letter-spacing: -0.015em;
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    margin: 0 0 1rem;
  }

  ul,
  ol {
    margin: 0 0 1rem;
    padding-left: 1.35rem;
  }

  li {
    margin-bottom: 0.35rem;
  }

  li::marker {
    color: ${(p) => p.theme.lovable.color.borderStrong};
  }

  blockquote {
    margin: 1.25rem 0;
    padding: 0.75rem 1rem;
    border-left: 2px solid ${(p) => p.theme.lovable.color.accent};
    background: ${(p) => p.theme.lovable.color.surface};
    color: ${(p) => p.theme.lovable.color.textMuted};
    font-style: italic;
  }

  code {
    padding: 0.1rem 0.35rem;
    border: 1px solid ${(p) => p.theme.lovable.color.border};
    border-radius: ${(p) => p.theme.lovable.radius.sm};
    background: ${(p) => p.theme.lovable.color.surface};
    font-family: ${(p) => p.theme.lovable.font.mono};
    font-size: 0.84em;
  }

  pre {
    margin: 0 0 1.25rem;
    padding: 0.9rem 1rem;
    overflow-x: auto;
    border: 1px solid ${(p) => p.theme.lovable.color.border};
    border-radius: ${(p) => p.theme.lovable.radius.md};
    background: ${(p) => p.theme.lovable.color.surface};
  }

  pre code {
    padding: 0;
    border: none;
    background: none;
    font-size: 0.82rem;
    line-height: 1.6;
  }

  img {
    display: block;
    width: 100%;
    margin: 1.5rem 0;
    border-radius: ${(p) => p.theme.lovable.radius.md};
  }

  table {
    width: 100%;
    margin: 0 0 1.5rem;
    border-collapse: collapse;
    font-size: 1rem;
  }

  th,
  td {
    padding: 0.5rem 0.65rem;
    border: 1px solid ${(p) => p.theme.lovable.color.border};
    text-align: left;
  }

  th {
    background: ${(p) => p.theme.lovable.color.surface};
    color: ${(p) => p.theme.lovable.color.textMuted};
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  hr {
    margin: 2rem 0;
    border: none;
    border-top: 1px solid ${(p) => p.theme.lovable.color.border};
  }

  input[type='checkbox'] {
    margin-right: 0.4rem;
    accent-color: ${(p) => p.theme.lovable.color.accent};
  }

  strong {
    color: ${(p) => p.theme.lovable.color.text};
  }
`

export const MarkdownStyled = styled.div`
  ${lovableMarkdownStyles}
`
