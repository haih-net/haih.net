import type { Meta, StoryObj } from '@storybook/react-vite'
import { Markdown } from './index'

const meta: Meta<typeof Markdown> = {
  title: 'Components/Markdown',
  component: Markdown,
}

export default meta

type Story = StoryObj<typeof Markdown>

export const Kitchen: Story = {
  args: {
    content: `# Heading one

Body copy with **bold**, *italic* and \`inline code\`.

## Heading two

- list item one
- list item two

> A quote from an operator.

\`\`\`json
{ "capability": "market research", "latency_ms": 240000 }
\`\`\`

| field | type |
| --- | --- |
| id | string |
| kind | agent \\| human |
`,
  },
}
