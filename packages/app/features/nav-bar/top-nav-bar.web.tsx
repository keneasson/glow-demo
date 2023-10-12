import React from 'react'
import { Image } from '@my/ui'
import { Search } from 'app/features/search'
import { Profile } from 'app/components/profile/profile'
import { MainNavTabs } from 'app/features/nav-bar/main-nav-tabs'
import { useMedia } from 'tamagui'

import logo from '../../assets/Glow.svg'
import { PageLayoutSection } from 'app/components/page-layout-section'

export const TopNavBar: React.FC<NavBarInterface> = ({ pageId }) => {
  const media = useMedia()
  const horizontalPadding = media.gtMd ? 55 : 24

  return (
    <PageLayoutSection height={94} paddingHorizontal={horizontalPadding}>
      <Image source={{ uri: logo.src, width: 70, height: 22 }} />
      <Search />
      <MainNavTabs />
      <Profile />
    </PageLayoutSection>
  )
}
