import { Stack } from 'expo-router'
import NativeAppHeader from 'app/components/native-app-header'
import { GlowDifference } from 'app/features/screens/glow-difference/glow-difference'

export default function Page() {
  const activeScreen = 'glow-difference'

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Glow - difference',
          header: () => <NativeAppHeader activeScreen={activeScreen} />,
        }}
      />
      <GlowDifference />
    </>
  )
}
