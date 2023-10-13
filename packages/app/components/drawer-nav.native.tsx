import React, { Dispatch, useState } from 'react'
import { Sheet, YStack } from 'tamagui'
import { MainNavItems } from 'app/features/nav-bar/main-nav-items'
import { NavButton } from 'app/components/buttons/nav-button'
import { Separator, SizableText, XStack } from '@my/ui'
import { Home } from '@tamagui/lucide-icons'
import { useRouter } from 'solito/router'
import { Profile } from 'app/components/profile/profile'
import { NewsletterSignup } from 'app/components/newsletter-signup'

type DrawerNavProps = {
  pageId?: string
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
}
export const DrawerNav: React.FC<DrawerNavProps> = ({ pageId, isOpen, setIsOpen }) => {
  const router = useRouter()
  const [position, setPosition] = useState(0)

  return (
    <Sheet
      forceRemoveScrollEnabled={isOpen}
      modal={true}
      open={isOpen}
      onOpenChange={setIsOpen}
      snapPoints={[90, 50]}
      snapPointsMode="percent"
      dismissOnSnapToBottom
      position={position}
      onPositionChange={setPosition}
      zIndex={100_000}
    >
      <Sheet.Overlay />
      <Sheet.Handle />
      <Sheet.Frame>
        <YStack
          gap={32}
          padding={48}
          justifyContent={'space-around'}
          alignContent={'flex-start'}
          alignItems={'flex-start'}
          backgroundColor={'white'}
        >
          <NavButton onPress={() => router.replace('/')}>
            <Home size={24} />
            <SizableText>Home</SizableText>
          </NavButton>
          <MainNavItems pageId={pageId} setIsOpen={setIsOpen} />
          <XStack alignItems={'center'}>
            <Separator alignSelf="stretch" borderColor="#8F8F8F" />
          </XStack>
          <Profile />
          <NewsletterSignup />
        </YStack>
      </Sheet.Frame>
    </Sheet>
  )
}
