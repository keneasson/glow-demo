import React from 'react'
import { Stack, XStack, YStack } from '@my/ui'
import { TopNavBar } from 'app/features/nav-bar/top-nav-bar'
import { Footer } from 'app/components/footer'

type PageLayoutGeneralProps = {
  children: React.ReactNode
}

export const PageLayoutGeneral: React.FC<PageLayoutGeneralProps> = ({ children }) => {
  return (
    <>
      <Stack backgroundColor="white">
        <XStack flexGrow={9} justifyContent="flex-start">
          <TopNavBar ariaLabel={'Main Menu'} />
        </XStack>
        <XStack backgroundColor="$light">
          <YStack id="LayoutColumn02" flex={6} rowGap={50}>
            {children}
          </YStack>
        </XStack>
      </Stack>
      <Stack height={45} />
      <Footer />
    </>
  )
}
