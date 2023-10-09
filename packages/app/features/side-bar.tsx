import React from 'react'
import { Profile } from 'app/components/profile/profile'
import { Search } from 'app/features/search'
import { BottomNavBar } from 'app/features/nav-bar/bottom-nav-bar.native'
import { YStack } from '@my/ui'
import { green } from '@tamagui/colors'

export const SideBar: React.FC = () => {
  return (
    <YStack minWidth={190} maxWidth={240} flex={1} height="100%" backgroundColor={green.green12}>
      <Profile />
      <Search />
      <BottomNavBar ariaLabel={'Lable'} />
    </YStack>
  )
}
