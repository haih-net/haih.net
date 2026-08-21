import { AskAiButtonStyled } from './styles'

export function AskAiButton({ label = 'Ask AI' }: { label?: string }) {
  return (
    <AskAiButtonStyled type="button" data-ask-ai="true">
      {label}
    </AskAiButtonStyled>
  )
}
