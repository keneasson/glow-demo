import { PageLayoutGeneral } from 'app/components/page-layout-general'
import React from 'react'
import { PageLayoutSection } from 'app/components/page-layout-section'
import { Content } from 'app/features/screens/glow-difference/content'

export const GlowDifference: React.FC = () => {
  return (
    <PageLayoutGeneral pageId="glow-difference">
      <PageLayoutSection>
        <Content />
      </PageLayoutSection>
    </PageLayoutGeneral>
  )
}
