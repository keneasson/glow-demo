import { Button, styled, Text, XStack } from '@my/ui'
import { ArrowLeft, Menu } from '@tamagui/lucide-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

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
  const isHomeScreen = activeScreen === 'HomeScreen'
  const router = useRouter()

  const goBack = () => {
    router.back()
  }
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{ backgroundColor: 'white', paddingBottom: 16, marginBottom: 0 }}
    >
      <Header>
        {isHomeScreen ? (
          <Hamburger icon={<Menu size={23} />} onPress={() => console.log('Clicked')} />
        ) : (
          <BackButton icon={<ArrowLeft size={23} />} onPress={goBack} />
        )}
        <Text position={'absolute'} left={100} bottom={0}>
          Save The World
        </Text>
      </Header>
    </SafeAreaView>
  )
}

export default NativeAppHeader
