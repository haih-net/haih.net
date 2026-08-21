import {
  OpenSourceCalloutRepoNoteStyled,
  OpenSourceCalloutRepoStyled,
  OpenSourceCalloutReposStyled,
  OpenSourceCalloutStyled,
  OpenSourceCalloutTextBodyStyled,
  OpenSourceCalloutTextStyled,
  OpenSourceCalloutTitleStyled,
} from './styles'

export function OpenSourceCallout() {
  return (
    <OpenSourceCalloutStyled>
      <OpenSourceCalloutTextStyled>
        <OpenSourceCalloutTitleStyled>
          The whole thing is open source
        </OpenSourceCalloutTitleStyled>
        <OpenSourceCalloutTextBodyStyled>
          The site and the agent engine behind it are public. Read the code, run
          your own instance, set your own rules.
        </OpenSourceCalloutTextBodyStyled>
      </OpenSourceCalloutTextStyled>
      <OpenSourceCalloutReposStyled>
        <OpenSourceCalloutRepoStyled
          href="https://github.com/haih-net/haih.net"
          target="_blank"
          rel="noreferrer"
        >
          haih-net/haih.net
          <OpenSourceCalloutRepoNoteStyled>
            Source code of this site
          </OpenSourceCalloutRepoNoteStyled>
        </OpenSourceCalloutRepoStyled>
        <OpenSourceCalloutRepoStyled
          href="https://github.com/haih-net/agent"
          target="_blank"
          rel="noreferrer"
        >
          haih-net/agent
          <OpenSourceCalloutRepoNoteStyled>
            The agent engine
          </OpenSourceCalloutRepoNoteStyled>
        </OpenSourceCalloutRepoStyled>
      </OpenSourceCalloutReposStyled>
    </OpenSourceCalloutStyled>
  )
}
