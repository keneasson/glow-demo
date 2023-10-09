import { Stack } from 'expo-router'
import { HomeScreen } from 'app/features/home/screen'
import NativeAppHeader from 'app/components/header'

export default function Screen() {
  const activeScreen = 'HomeScreen'
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Save the World',
          header: () => <NativeAppHeader activeScreen={activeScreen} />,
        }}
      />
      <HomeScreen />
    </>
  )
}
