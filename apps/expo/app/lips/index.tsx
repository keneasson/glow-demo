import { Stack } from 'expo-router'
import NativeAppHeader from 'app/components/native-app-header'
import { Lips } from 'app/features/screens/lips/lips'

export default function Page() {
  const activeScreen = 'lips'

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Lips',
          header: () => <NativeAppHeader activeScreen={activeScreen} />,
        }}
      />
      <Lips />
    </>
  )
}
