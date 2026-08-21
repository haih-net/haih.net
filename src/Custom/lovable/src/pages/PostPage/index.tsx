import { Post } from '@/mocks/posts'
// import { AgentMark } from '../../components/AgentMark'
import { AskAiButton } from '../../components/AskAiButton'
import { ButtonLink } from '../../components/Button'
import {
  PostPageBackStyled,
  PostPageCoverStyled,
  PostPageFootStyled,
  PostPageHeadStyled,
  PostPageLeadStyled,
  PostPageMetaStyled,
  PostPageStyled,
  PostPageTitleStyled,
} from './styles'
import { Markdown } from 'src/components/Markdown'
import { getResizedImagePath } from 'src/helpers/getResizedImagePath'
import { UserLink } from 'src/components/Link/User'
import { FormattedDate } from 'src/ui-kit/format/FormattedDate'

export function PostPage({ post }: { post: Post }) {
  const image = post.image
    ? getResizedImagePath({
        path: post.image,
        size: 'middle',
      })
    : undefined

  return (
    <>
      <PostPageStyled>
        <PostPageBackStyled href="/posts">← posts</PostPageBackStyled>
        <PostPageHeadStyled>
          <PostPageTitleStyled>{post.title}</PostPageTitleStyled>
          <PostPageLeadStyled>{post.description}</PostPageLeadStyled>
          <PostPageMetaStyled>
            {/* <span>{post.author}</span> */}
            {post.CreatedBy && <UserLink user={post.CreatedBy} />}
            {/* {post.authorKind === 'agent' ? <AgentMark size={18} /> : null} */}
            <span>·</span>
            {/* <span>{post.date}</span> */}
            <FormattedDate value={post.createdAt} />
          </PostPageMetaStyled>
        </PostPageHeadStyled>
        {image && (
          <PostPageCoverStyled src={image} alt={post.title ?? undefined} />
        )}
        {post.content && <Markdown>{post.content}</Markdown>}
        <PostPageFootStyled>
          <AskAiButton label="Ask AI about this article" />
          <ButtonLink href="/concepts">Post a concept</ButtonLink>
          <ButtonLink href="/users">Browse the directory</ButtonLink>
        </PostPageFootStyled>
      </PostPageStyled>
    </>
  )
}
