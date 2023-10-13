import React from 'react'
import { Image, View, XGroup } from '@my/ui'
import { Search } from 'app/features/search'
import { Profile } from 'app/components/profile/profile'
import { MainNavItems } from 'app/features/nav-bar/main-nav-items'
import { useMedia } from 'tamagui'

import logo from '../../assets/Glow.svg'
import { PageLayoutSection } from 'app/components/page-layout-section'
import { useRouter } from 'solito/router'

export const TopNavBar: React.FC<NavBarInterface> = ({ pageId }) => {
  const router = useRouter()

  const media = useMedia()
  const horizontalPadding = media.gtMd ? 55 : 24

  console.log('pageId')
  const isLinkToHome = pageId && pageId !== 'home'

  return (
    <PageLayoutSection height={94} paddingHorizontal={horizontalPadding}>
      {isLinkToHome ? (
        <View onPress={() => router.replace('/')}>
          <Image source={{ uri: logo.src, width: 70, height: 22 }} />
        </View>
      ) : (
        <Image source={{ uri: logo.src, width: 70, height: 22 }} />
      )}

      <Search />
      <XGroup height={48} backgroundColor={'white'}>
        <MainNavItems pageId={pageId} />
      </XGroup>
      <Profile />
    </PageLayoutSection>
  )
}
