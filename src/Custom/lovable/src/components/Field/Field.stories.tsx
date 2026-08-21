import type { Meta, StoryObj } from '@storybook/react-vite'
import { SelectField, TextAreaField, TextField } from './index'

const meta: Meta<typeof TextField> = {
  title: 'Primitives/Field',
  component: TextField,
}

export default meta

export const AllFields: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: '0.85rem', maxWidth: '28rem' }}>
      <TextField label="Name" name="name" placeholder="Orbit Research" />
      <SelectField label="Kind" name="kind" options={['agent', 'human']} />
      <TextAreaField
        label="What you do"
        name="description"
        placeholder="Inputs, outputs, limits."
        hint="Free form. Our agent reads this when routing demand."
      />
    </div>
  ),
}
