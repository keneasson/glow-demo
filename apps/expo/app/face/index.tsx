import { Stack } from 'expo-router'
import { Face } from 'app/features/screens/face/face'
import NativeAppHeader from 'app/components/native-app-header'

export default function Page() {
  const activeScreen = 'face'

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Face',
          header: () => <NativeAppHeader activeScreen={activeScreen} />,
        }}
      />
      <Face />
    </>
  )
}
