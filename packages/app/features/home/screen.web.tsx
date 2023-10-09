import React from 'react'
import { Stack, XStack, YStack } from '@my/ui'
import { Hero } from 'app/features/hero-home/hero'
import { TopNavBar } from 'app/features/nav-bar/top-nav-bar'

export function HomeScreen() {
  return (
    <Stack backgroundColor="$light">
      <XStack flexGrow={9} justifyContent="flex-start">
        <TopNavBar ariaLabel={'Main Menu'} />
      </XStack>
      <XStack backgroundColor="$light">
        <YStack id="LayoutColumn02" flex={6} rowGap={50}>
          <Hero />
          {/*<BellowTheFold />*/}
        </YStack>
        {/*<XStack id="LayoutColumn03" margin={8} flex={2}>*/}
        {/*  /!*<YStack width="100%" justifyContent={'center'} rowGap={'10%'}>*!/*/}
        {/*  /!*  <NewsletterSignup />*!/*/}
        {/*  /!*  <SocialLinks />*!/*/}
        {/*  /!*</YStack>*!/*/}
        {/*</XStack>*/}
      </XStack>
    </Stack>
  )
}
