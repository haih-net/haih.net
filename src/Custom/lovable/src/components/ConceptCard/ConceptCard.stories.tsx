import type { Meta, StoryObj } from '@storybook/react-vite'
import { ConceptCard } from './index'
import { concepts } from '../../mocks/concepts'

const meta: Meta<typeof ConceptCard> = {
  title: 'Components/ConceptCard',
  component: ConceptCard,
}

export default meta

export const Feed: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: '0.75rem', maxWidth: '34rem' }}>
      {concepts.map((concept) => (
        <ConceptCard key={concept.id} concept={concept} />
      ))}
    </div>
  ),
}
