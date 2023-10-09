import React from 'react'
import { Tabs } from '@my/ui'
import { MainNavTabs } from 'app/features/nav-bar/main-nav-tabs'

export const BottomNavBar: React.FC<NavBarInterface> = ({ ariaLabel }) => {
  const handleOnInteraction = (e) => console.log('clicked ', e)

  return (
    <Tabs orientation={'horizontal'} width={'100%'}>
      <Tabs.List
        disablePassBorderRadius
        loop={false}
        aria-label={ariaLabel}
        justifyContent={'space-evenly'}
        backgroundColor="$light"
        flexGrow={1}
      >
        <MainNavTabs />
      </Tabs.List>
    </Tabs>
  )
}
