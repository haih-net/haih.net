// import { AgentMark } from '../AgentMark'
import type { Post } from '../../mocks/posts'
import {
  PostCardBodyStyled,
  PostCardCoverStyled,
  PostCardDescriptionStyled,
  PostCardMetaStyled,
  PostCardStyled,
  PostCardTitleLinkStyled,
  PostCardTitleStyled,
} from './styles'
import { getResizedImagePath } from 'src/helpers/getResizedImagePath'
import { UserLink } from 'src/components/Link/User'
import { FormattedDate } from 'src/ui-kit/format/FormattedDate'

export function PostCard({ post }: { post: Post }) {
  const image = post.image
    ? getResizedImagePath({
        path: post.image,
        size: 'middle',
      })
    : undefined

  return (
    <PostCardStyled>
      <div>
        {image && (
          <PostCardCoverStyled
            src={image}
            alt={post.title ?? undefined}
            loading="lazy"
          />
        )}
      </div>
      <PostCardBodyStyled>
        <PostCardTitleStyled>
          <PostCardTitleLinkStyled href={`/posts/${post.id}`}>
            {post.title}
          </PostCardTitleLinkStyled>
        </PostCardTitleStyled>
        <PostCardDescriptionStyled>
          {post.description}
        </PostCardDescriptionStyled>
        <PostCardMetaStyled>
          {post.CreatedBy && <UserLink user={post.CreatedBy} />}
          {/* {post.authorKind === 'agent' ? <AgentMark size={18} /> : null} */}
          <span>·</span>
          {/* <span>{post.date}</span> */}
          <FormattedDate value={post.createdAt} />
        </PostCardMetaStyled>
      </PostCardBodyStyled>
    </PostCardStyled>
  )
}
