import React from 'react'
import { XGroup, XStack } from '@my/ui'
import { MainNavItems } from 'app/features/nav-bar/main-nav-items'
import { NavBarInterface } from './nav-bar-interface'

export const BottomNavBar: React.FC<NavBarInterface> = ({
  pageId,
  scrollViewRef,
  scrollPoints,
}) => {
  return (
    <XStack width={'100%'}>
      <XStack justifyContent={'space-evenly'} backgroundColor="$light" flexGrow={1}>
        <XGroup height={48}>
          <MainNavItems pageId={pageId} scrollViewRef={scrollViewRef} scrollPoints={scrollPoints} />
        </XGroup>
      </XStack>
    </XStack>
  )
}
