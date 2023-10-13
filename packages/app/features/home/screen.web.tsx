import React from 'react'
import { ScrollView, Stack, XStack, YStack } from '@my/ui'
import { Hero } from 'app/features/hero-home/hero'
import { TopNavBar } from 'app/features/nav-bar/top-nav-bar'
import { HomeBody } from 'app/features/home/home-body'
import { Footer } from 'app/components/footer'

export type ScrollViewRef = ScrollView & undefined
export type ScrollPoints = Record<string, number>

export function HomeScreen() {
  return (
    <>
      <Stack backgroundColor="white">
        <XStack flexGrow={9} justifyContent="flex-start">
          <TopNavBar pageId={'home'} />
        </XStack>
        <XStack backgroundColor="white">
          <YStack id="LayoutColumn02" flex={6} rowGap={50}>
            <Hero />
            <HomeBody />
          </YStack>
        </XStack>
      </Stack>
      <Stack height={45} />
      <Footer />
    </>
  )
}
