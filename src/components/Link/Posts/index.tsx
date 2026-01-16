import { LinkProps } from 'next/link'
import Link from 'next/link'

type TagLike = {
  id?: string | null
  name?: string | null
}

export function createPostsLink(tag?: TagLike | null): string {
  if (tag?.id) {
    return `/posts?tags=${tag.id}`
  }
  return '/posts'
}

type PostsLinkProps = React.PropsWithChildren<
  Omit<LinkProps, 'href'> & {
    tag?: TagLike | null
  }
>

export const PostsLink: React.FC<PostsLinkProps> = ({
  tag,
  children,
  ...other
}) => {
  const href = createPostsLink(tag)

  return (
    <Link {...other} href={href}>
      {children}
    </Link>
  )
}
