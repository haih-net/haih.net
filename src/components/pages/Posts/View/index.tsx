import { PostsPageViewProps } from './interfaces'
import { Post } from 'src/components/Post'
import { PostsLink } from 'src/components/Link/Posts'
import {
  PostsPageViewStyled,
  PostsPageViewTitleStyled,
  PostsPageViewTagsFilterStyled,
  PostsPageViewTagFilterStyled,
  PostsPageViewListStyled,
} from './styles'

export const PostsPageView: React.FC<PostsPageViewProps> = ({
  posts,
  count: _count,
  loading,
  tags,
  selectedTagId = null,
}) => {
  if (loading) {
    return <PostsPageViewStyled>Loading...</PostsPageViewStyled>
  }

  return (
    <PostsPageViewStyled>
      <PostsPageViewTitleStyled>Posts</PostsPageViewTitleStyled>
      {tags && tags.length > 0 && (
        <PostsPageViewTagsFilterStyled>
          {tags.map((tag) => (
            <PostsLink key={tag.id} tag={selectedTagId === tag.id ? null : tag}>
              <PostsPageViewTagFilterStyled $active={selectedTagId === tag.id}>
                {tag.name}
              </PostsPageViewTagFilterStyled>
            </PostsLink>
          ))}
        </PostsPageViewTagsFilterStyled>
      )}
      {!posts.length ? (
        <div>No posts yet</div>
      ) : (
        <PostsPageViewListStyled>
          {posts.map((post) => (
            <Post key={post.id} post={post} variant="list" />
          ))}
        </PostsPageViewListStyled>
      )}
    </PostsPageViewStyled>
  )
}
