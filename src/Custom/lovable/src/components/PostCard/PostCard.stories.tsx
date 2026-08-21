import type { Meta, StoryObj } from '@storybook/react-vite'
import { PostCard } from './index'
import { posts } from '../../mocks/posts'

const meta: Meta<typeof PostCard> = {
  title: 'Components/PostCard',
  component: PostCard,
}

export default meta

export const AllPosts: StoryObj = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: '24rem' }}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  ),
}
