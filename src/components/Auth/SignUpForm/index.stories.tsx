import { useCallback, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SignUpForm as Component, SignUpFormProps } from './index'

type Props = Parameters<typeof Component>[0]

function Renderer({ loading: loadingInitial, ...other }: Props) {
  const [loading, setLoading] = useState(loadingInitial ?? false)

  const handleSubmit = useCallback<
    NonNullable<SignUpFormProps['onSuccessHandler']>
  >(async () => {
    setLoading(true)
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLoading(false)
  }, [])

  return (
    <Component {...other} loading={loading} onSuccessHandler={handleSubmit} />
  )
}

const meta = {
  title: 'Components/Auth/SignUpForm',
  component: Renderer,
} satisfies Meta<typeof Renderer>

export default meta

type Story = StoryObj<typeof Renderer>

export const Default: Story = {}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
