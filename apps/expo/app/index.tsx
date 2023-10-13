import { Stack } from 'expo-router'
import { HomeScreen } from 'app/features/home/screen'
import NativeAppHeader from 'app/components/native-app-header'

export default function Screen() {
  const activeScreen = 'home'
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Glow',
          header: () => <NativeAppHeader activeScreen={activeScreen} />,
        }}
      />
      <HomeScreen />
    </>
  )
}
