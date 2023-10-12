import { Stack } from 'expo-router'
import { Face } from 'app/features/screens/face/face'
import NativeAppHeader from 'app/components/native-app-header'
import { GlowDifference } from 'app/features/screens/glow-difference'

export default function Page() {
  const activeScreen = 'Face'

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
