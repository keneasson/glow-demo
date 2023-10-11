import React from 'react'
import { Image } from '@my/ui'
import { Search } from 'app/features/search'
import { Profile } from 'app/components/profile/profile'
import { MainNavTabs } from 'app/features/nav-bar/main-nav-tabs'

import logo from '../../assets/Glow.svg'
import { PageLayoutSection } from 'app/components/page-layout-section'

export const TopNavBar: React.FC<NavBarInterface> = ({ ariaLabel }) => {
  const handleOnInteraction = (e) => console.log('clicked ', e)

  return (
    <PageLayoutSection height={94} width={'calc(100% - 110px)'}>
      <Image source={{ uri: logo.src, width: 70, height: 22 }} />
      <Search />
      <MainNavTabs />
      <Profile />
    </PageLayoutSection>
  )
}
