import React from 'react'
import { ScrollView, XStack, YStack } from '@my/ui'
import { BottomNavBar } from 'app/features/nav-bar/bottom-nav-bar'
import { ScrollPoints } from 'app/features/home/screen'

type PageLayoutLevel2Props = {
  pageId: string
  children: React.ReactNode
  scrollPoints: ScrollPoints
  sc
}

export const PageLayoutGeneral: React.FC<PageLayoutLevel2Props> = ({ pageId, children }) => {
  return (
    <>
      <ScrollView backgroundColor="white">
        <XStack flex={1} backgroundColor="white">
          <YStack flex={6} flexDirection={'column'}>
            <YStack flexDirection={'column'} alignContent={'flex-end'}>
              {children}
            </YStack>
          </YStack>
        </XStack>
      </ScrollView>
      <XStack position="absolute" bottom={10} justifyContent={'space-evenly'} width={'100%'}>
        <BottomNavBar pageId={pageId} />
      </XStack>
    </>
  )
}
