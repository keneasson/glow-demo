import React from 'react'
import { Stack, XStack, YStack } from '@my/ui'
import { TopNavBar } from 'app/features/nav-bar/top-nav-bar'
import { Footer } from 'app/components/footer'
import { useMedia } from 'tamagui'

type PageLayoutGeneralProps = {
  title: string
  children: React.ReactNode
  pageId: string
}

export const PageLayoutGeneral: React.FC<PageLayoutGeneralProps> = ({ children, pageId }) => {
  const media = useMedia()
  const horizontalPadding = media.gtMd ? 55 : 24

  return (
    <>
      <Stack backgroundColor="white">
        <XStack flexGrow={9} justifyContent="flex-start">
          <TopNavBar pageId={pageId} />
        </XStack>
        <YStack gap={64} alignItems="center" paddingHorizontal={horizontalPadding}>
          <YStack id="LayoutColumn02" flex={6} rowGap={50}>
            {children}
          </YStack>
        </YStack>
      </Stack>
      <Stack height={45} />
      <Footer />
    </>
  )
}
