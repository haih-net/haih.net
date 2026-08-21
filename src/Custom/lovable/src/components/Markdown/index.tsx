import { marked } from 'marked'
import { MarkdownStyled } from './styles'

marked.setOptions({ gfm: true, breaks: false })

export function Markdown({ content }: { content: string }) {
  const html = marked.parse(content, { async: false })

  return <MarkdownStyled dangerouslySetInnerHTML={{ __html: html }} />
}
