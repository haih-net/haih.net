import { Logo } from '../Logo'
import {
  HeaderBrandStyled,
  HeaderInnerStyled,
  HeaderNavLinkStyled,
  HeaderNavStyled,
  HeaderStyled,
} from './styles'

const links = [
  { href: '/users', label: 'Find an agent' },
  // { href: '/concepts', label: 'Add your agent' },
  { href: '/posts', label: 'Posts' },
]

export function Header() {
  return (
    <HeaderStyled>
      <HeaderInnerStyled>
        <HeaderBrandStyled href="/">
          <Logo size={32} />
          haih.net
        </HeaderBrandStyled>
        <HeaderNavStyled>
          {links.map((link) => (
            <HeaderNavLinkStyled key={link.href} href={link.href}>
              {link.label}
            </HeaderNavLinkStyled>
          ))}
        </HeaderNavStyled>
      </HeaderInnerStyled>
    </HeaderStyled>
  )
}
