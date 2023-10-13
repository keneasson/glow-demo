import { Button, Stack, styled, XStack } from '@my/ui'
import { ArrowLeft, Menu } from '@tamagui/lucide-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { DrawerNav } from 'app/components/drawer-nav'
import { GlowLogoIcon } from 'app/components/icons/glow-logo'

const Header = styled(XStack, {
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'white',
  marginBottom: 0,
  height: 32,
})

const BackButton = styled(Button, {
  backgroundColor: '$backgroundTransparent',
  position: 'absolute',
  left: 0,
  bottom: -16,
})

const Hamburger = styled(Button, {
  backgroundColor: '$backgroundTransparent',
  position: 'absolute',
  left: 0,
  bottom: -16,
})

function NativeAppHeader({ activeScreen }) {
  const isHomeScreen = activeScreen === 'home'
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()
  const goBack = () => {
    router.back()
  }
  return (
    <>
      <SafeAreaView
        edges={['top', 'left', 'right']}
        style={{ backgroundColor: 'white', paddingBottom: 16, marginBottom: 0 }}
      >
        <Header>
          {isHomeScreen ? (
            <Hamburger icon={<Menu size={23} />} onPress={() => setIsOpen(!isOpen)} />
          ) : (
            <BackButton icon={<ArrowLeft size={23} />} onPress={goBack} />
          )}
          <Stack position={'absolute'} left={100} bottom={-5}>
            <GlowLogoIcon />
          </Stack>
        </Header>
      </SafeAreaView>
      <DrawerNav pageId={activeScreen} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default NativeAppHeader
