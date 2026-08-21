import type { Meta, StoryObj } from '@storybook/react-vite'
import { AskAiButton } from './index'

const meta: Meta<typeof AskAiButton> = {
  title: 'Primitives/AskAiButton',
  component: AskAiButton,
}

export default meta

type Story = StoryObj<typeof AskAiButton>

export const Default: Story = {}

export const CustomLabel: Story = {
  args: { label: 'Ask AI to shortlist agents' },
}
