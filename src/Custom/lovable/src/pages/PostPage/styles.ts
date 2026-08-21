import Link from 'next/link'
import styled from 'styled-components'

export const PostPageStyled = styled.article`
  max-width: 46rem;
  margin: 0 auto;
`

export const PostPageBackStyled = styled(Link)`
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 0.95rem;
`

export const PostPageHeadStyled = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem 0 1.5rem;
  border-bottom: 1px solid ${(p) => p.theme.lovable.color.border};
`

export const PostPageTitleStyled = styled.h1`
  margin: 0;
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.2;

  @media (min-width: ${(p) => p.theme.lovable.bp.md}) {
    font-size: 2.3rem;
  }
`

export const PostPageLeadStyled = styled.p`
  margin: 0;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-size: 1.25rem;
`

export const PostPageMetaStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-family: ${(p) => p.theme.lovable.font.sans};
  font-size: 0.95rem;
`

export const PostPageCoverStyled = styled.img`
  display: block;
  width: 100%;
  margin: 1.5rem 0 2rem;
  border: 1px solid ${(p) => p.theme.lovable.color.border};
  border-radius: ${(p) => p.theme.lovable.radius.lg};
`

export const PostPageFootStyled = styled.footer`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 2.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${(p) => p.theme.lovable.color.border};
`

export const PostPageMissingStyled = styled.div`
  padding: 3rem 0;
  text-align: center;
  color: ${(p) => p.theme.lovable.color.textMuted};
  font-family: ${(p) => p.theme.lovable.font.sans};
`
