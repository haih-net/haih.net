import { Meta, StoryObj } from '@storybook/nextjs-vite'
import { UserPageView as Component } from '../'
import { UserFragment } from 'src/gql/generated'

type Props = Parameters<typeof Component>[0]

const mockUser: UserFragment = {
  id: '1',
  username: 'johndoe',
  fullname: 'John Doe',
  createdAt: new Date(),
}

const meta: Meta<Props> = {
  title: 'pages/Users/User/View',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<Props>

export const Default: Story = {
  args: {
    user: mockUser,
  },
}
