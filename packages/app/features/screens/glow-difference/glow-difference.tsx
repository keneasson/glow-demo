import React from 'react'
import { Content } from 'app/features/screens/glow-difference/content'
import { PageLayoutGeneral } from 'app/components/page-layout-general'

const pageId = 'glow-diff'

export function GlowDifference() {
  return (
    <>
      <PageLayoutGeneral pageId={pageId} title={'Glow the Difference'}>
        <Content />
      </PageLayoutGeneral>
    </>
  )
}
