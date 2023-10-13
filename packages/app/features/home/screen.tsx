import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native'
import { Stack, XStack, YStack } from '@my/ui'
import { HomeBody } from 'app/features/home/home-body'
import { Hero } from 'app/features/hero-home/hero'
import { BottomNavBar } from 'app/features/nav-bar/bottom-nav-bar'

export type ScrollPoints = Record<string, number>

export function HomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null)

  const [scrollPoints, setScrollPoints] = useState<ScrollPoints>({})

  return (
    <>
      <ScrollView scrollsToTop={true} ref={scrollViewRef}>
        <XStack flex={1} backgroundColor="white">
          <YStack flex={6} flexDirection={'column'}>
            <Stack
              onLayout={(event) => {
                const layout = event.nativeEvent.layout
                setScrollPoints({ ...scrollPoints, offset: layout.height })
              }}
            >
              <Hero />
            </Stack>
            <HomeBody scrollPoints={scrollPoints} setScrollPoints={setScrollPoints} />
            <Stack height={90}></Stack>
          </YStack>
        </XStack>
      </ScrollView>
      <XStack position="absolute" bottom={10} justifyContent={'space-evenly'} width={'100%'}>
        <BottomNavBar
          pageId="home-native"
          scrollViewRef={scrollViewRef.current}
          scrollPoints={scrollPoints}
        />
      </XStack>
    </>
  )
}
