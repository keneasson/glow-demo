import React from 'react'
import { Stack, XStack, YStack } from '@my/ui'
import { Hero } from 'app/features/hero-home/hero'
import { TopNavBar } from 'app/features/nav-bar/top-nav-bar'
import { HomeBody } from 'app/features/home/home-body'
import { Footer } from 'app/components/footer'

export function HomeScreen() {
  return (
    <>
      <Stack backgroundColor="white">
        <XStack flexGrow={9} justifyContent="flex-start">
          <TopNavBar ariaLabel={'Main Menu'} />
        </XStack>
        <XStack backgroundColor="$light">
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
