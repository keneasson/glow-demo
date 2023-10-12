import React from 'react'
import { XStack } from '@my/ui'
import { MainNavTabs } from 'app/features/nav-bar/main-nav-tabs'

export const BottomNavBar: React.FC<NavBarInterface> = ({ pageId }) => {
  return (
    <XStack width={'100%'}>
      <XStack justifyContent={'space-evenly'} backgroundColor="$light" flexGrow={1}>
        <MainNavTabs />
      </XStack>
    </XStack>
  )
}
