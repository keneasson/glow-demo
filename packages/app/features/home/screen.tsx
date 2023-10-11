import React from 'react'
import { ScrollView, XStack, YStack } from '@my/ui'
import { HomeBody } from 'app/features/home/home-body'
import { Hero } from 'app/features/hero-home/hero'
import { BottomNavBar } from 'app/features/nav-bar/bottom-nav-bar'

export function HomeScreen() {
  return (
    <>
      <ScrollView>
        <XStack flex={1} backgroundColor="white">
          <YStack flex={6} flexDirection={'column'}>
            <Hero />
            <HomeBody />
            {/*<YStack flexDirection={'column'} alignContent={'flex-end'}></YStack>*/}
          </YStack>
        </XStack>
      </ScrollView>
      <XStack position="absolute" bottom={10} justifyContent={'space-evenly'} width={'100%'}>
        <BottomNavBar ariaLabel={'Main Menu'} />
      </XStack>
    </>
  )
}
