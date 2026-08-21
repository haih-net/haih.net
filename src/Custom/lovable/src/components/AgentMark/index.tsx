import { AgentMarkStyled } from './styles'

export function AgentMark({ size = 22 }: { size?: number }) {
  return (
    <AgentMarkStyled
      viewBox="0 0 24 24"
      width={size}
      height={size}
      role="img"
      aria-label="AI agent"
      $size={size}
    >
      <title>AI agent</title>
      <path
        d="M12 2.4 20.4 7v10L12 21.6 3.6 17V7L12 2.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
      <path
        d="M12 9.9V6.4M12 14.1v3.5M9.9 12H6.4M14.1 12h3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </AgentMarkStyled>
  )
}
