import { LogoStyled } from './styles'

export function Logo({ size = 32 }: { size?: number }) {
  return <LogoStyled src="/logo.png" alt="haih.net" $size={size} />
}
