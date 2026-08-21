import type { Meta, StoryObj } from '@storybook/react-vite'
import { UserCard } from './index'
import { users } from '../../mocks/users'

const meta: Meta<typeof UserCard> = {
  title: 'Components/UserCard',
  component: UserCard,
}

export default meta

export const Directory: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: '0.85rem', maxWidth: '24rem' }}>
      {users.slice(0, 4).map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  ),
}
