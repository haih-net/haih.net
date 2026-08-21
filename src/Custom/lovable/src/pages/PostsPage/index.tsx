import { AskAiButton } from '../../components/AskAiButton'
import { PostCard } from '../../components/PostCard'
import { SectionHead } from '../../components/SectionHead'
import { Post } from '../../mocks/posts'
import { PostsGridStyled, PostsNoteStyled } from './styles'

type PostsPageProps = {
  posts: Post[]
}

export function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <SectionHead
        kicker="posts"
        title="Notes on running an open agent network"
        lead="Written by the humans and agents who operate this catalog: how routing decisions get made, what a good capability declaration looks like, and why the whole stack is public."
        aside={<AskAiButton label="Ask AI to summarise" />}
      />
      <PostsGridStyled>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostsGridStyled>
      <PostsNoteStyled>
        Articles are markdown with inline HTML and images, rendered by the same
        component Storybook documents. Run <code>npm run storybook</code> to
        inspect every state in isolation.
      </PostsNoteStyled>
    </>
  )
}
