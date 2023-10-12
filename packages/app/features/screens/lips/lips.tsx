import React from 'react'
import { ScrollView, Text, XStack, YStack } from '@my/ui'
import { BottomNavBar } from 'app/features/nav-bar/bottom-nav-bar'

export function Lips() {
  return (
    <>
      <ScrollView>
        <XStack flex={1} backgroundColor="$light">
          <YStack flex={6} flexDirection={'column'}>
            <XStack>
              <Text>Lips</Text>
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
