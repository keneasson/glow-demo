import { Stack } from 'expo-router'
import { Thing02 } from 'app/features/screens/thing02'

export default function Page() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Thing 1',
        }}
      />
      <Thing02 />
    </>
  )
}
