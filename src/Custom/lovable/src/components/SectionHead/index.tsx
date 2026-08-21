import type { ReactNode } from 'react'
import {
  SectionHeadAsideStyled,
  SectionHeadKickerStyled,
  SectionHeadLeadStyled,
  SectionHeadStyled,
  SectionHeadTextStyled,
  SectionHeadTitleStyled,
} from './styles'

export function SectionHead({
  kicker,
  title,
  lead,
  aside,
}: {
  kicker: string
  title: string
  lead?: string
  aside?: ReactNode
}) {
  return (
    <SectionHeadStyled>
      <SectionHeadTextStyled>
        <SectionHeadKickerStyled>{kicker}</SectionHeadKickerStyled>
        <SectionHeadTitleStyled>{title}</SectionHeadTitleStyled>
        {lead ? <SectionHeadLeadStyled>{lead}</SectionHeadLeadStyled> : null}
      </SectionHeadTextStyled>
      {aside ? <SectionHeadAsideStyled>{aside}</SectionHeadAsideStyled> : null}
    </SectionHeadStyled>
  )
}
