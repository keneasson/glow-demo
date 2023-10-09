import React from 'react'
import { Image, Tabs, View, XStack } from '@my/ui'
import { Search } from 'app/features/search'
import { Profile } from 'app/components/profile/profile'
import { MainNavTabs } from 'app/features/nav-bar/main-nav-tabs'

import logo from '../../assets/Glow.svg'

export const TopNavBar: React.FC<NavBarInterface> = ({ ariaLabel }) => {
  const handleOnInteraction = (e) => console.log('clicked ', e)

  return (
    <XStack alignItems={'center'}>
      <View marginLeft={55}>
        <Image source={{ uri: logo.src, width: 70, height: 22 }} />
      </View>
      <Tabs>
        <Tabs.List
          disablePassBorderRadius
          loop={false}
          aria-label={ariaLabel}
          space="$2"
          backgroundColor="transparent"
          marginLeft={'auto'}
          height={'auto'}
        >
          <Tabs.Tab unstyled value="search">
            <Search />
          </Tabs.Tab>
          <MainNavTabs />
          <Tabs.Tab unstyled value="profile">
            <Profile />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </XStack>
  )
}
