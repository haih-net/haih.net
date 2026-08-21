import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, ButtonLink } from './index'

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
}

export default meta

export const Variants: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
      <Button>Primary action</Button>
      <Button variant="ghost">Ghost action</Button>
      <ButtonLink href="/users">Link ghost</ButtonLink>
      <ButtonLink
        href="https://github.com/haih-net/agent"
        variant="primary"
        external
      >
        External
      </ButtonLink>
    </div>
  ),
}
