import React from 'react'
import { ScrollView, Text, XStack, YStack } from '@my/ui'

export function Face() {
  return (
    <>
      <ScrollView>
        <XStack flex={1} backgroundColor="$light">
          <YStack flex={6} flexDirection={'column'}>
            <XStack>
              <Text>Face</Text>
            </XStack>
            <YStack flexDirection={'column'} alignContent={'flex-end'}></YStack>
          </YStack>
        </XStack>
      </ScrollView>
    </>
  )
}
