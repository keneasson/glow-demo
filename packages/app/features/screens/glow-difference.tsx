import React from 'react'
import { ScrollView, Text, XStack, YStack } from '@my/ui'
import { BottomNavBar } from 'app/features/nav-bar/bottom-nav-bar'
import { Hero } from 'app/features/hero-home/hero'

export function GlowDifference() {
  return (
    <>
      <ScrollView>
        <XStack flex={1} backgroundColor="$light">
          <YStack flex={6} flexDirection={'column'}>
            <XStack>
              <Hero />
              <Text>The Glow Difference</Text>
            </XStack>
            <YStack flexDirection={'column'} alignContent={'flex-end'}></YStack>
          </YStack>
        </XStack>
      </ScrollView>
      <XStack position="absolute" bottom={10} justifyContent={'space-evenly'} width={'100%'}>
        <BottomNavBar pageId="lips" />
      </XStack>
    </>
  )
}
