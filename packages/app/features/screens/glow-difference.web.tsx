import { PageLayoutGeneral } from 'app/components/page-layout-general'
import { Text } from '@my/ui'
import React from 'react'
import { Hero } from 'app/features/hero-home/hero'

export const GlowDifference: React.FC = () => {
  return (
    <PageLayoutGeneral pageId="glow-difference">
      <Hero />
      <Text>The Glow Difference</Text>
    </PageLayoutGeneral>
  )
}
