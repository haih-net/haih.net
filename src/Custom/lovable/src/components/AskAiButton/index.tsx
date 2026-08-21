import { useOpenChatWithMessage } from 'src/components/Chat/hooks/useOpenChatWithMessage'
import { AskAiButtonStyled } from './styles'

export function AskAiButton({ label = 'Ask AI' }: { label?: string }) {
  const chatAgentHandler = useOpenChatWithMessage()

  return (
    <AskAiButtonStyled
      type="button"
      data-ask-ai="true"
      onClick={chatAgentHandler}
    >
      {label}
    </AskAiButtonStyled>
  )
}
