import { Stack } from 'expo-router'
import NativeAppHeader from 'app/components/native-app-header'
import { Eyes } from 'app/features/screens/eyes'

export default function Page() {
  const activeScreen = 'Eyes'

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Eyes',
          header: () => <NativeAppHeader activeScreen={activeScreen} />,
        }}
      />
      <Eyes />
    </>
  )
}
