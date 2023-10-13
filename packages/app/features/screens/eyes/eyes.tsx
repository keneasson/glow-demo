import React from 'react'
import { Paragraph, ScrollView, Text, XStack, YStack } from '@my/ui'
import { BottomNavBar } from 'app/features/nav-bar/bottom-nav-bar'

export function Eyes() {
  return (
    <>
      <ScrollView>
        <XStack flex={1} backgroundColor="$light">
          <YStack flex={6} flexDirection={'column'}>
            <XStack margin={45}>
              <Text>Eyes</Text>
              <ScrollView>
                <Paragraph>
                  Arcu bibendum at varius vel pharetra vel turpis nunc eget. Nunc non blandit massa
                  enim nec dui nunc. Ornare massa eget egestas purus viverra accumsan. Faucibus
                  scelerisque eleifend donec pretium. Laoreet sit amet cursus sit amet. Massa eget
                  egestas purus viverra accumsan. Sagittis vitae et leo duis ut diam quam nulla
                  porttitor. Enim praesent elementum facilisis leo. Morbi leo urna molestie at
                  elementum eu. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus.
                  A cras semper auctor neque vitae tempus quam pellentesque nec. Et pharetra
                  pharetra massa massa ultricies. Posuere ac ut consequat semper viverra nam libero
                  justo laoreet. Vitae congue mauris rhoncus aenean vel elit. Magna eget est lorem
                  ipsum dolor sit amet consectetur. At volutpat diam ut venenatis tellus. Ornare
                  arcu dui vivamus arcu. Ut faucibus pulvinar elementum integer.
                </Paragraph>
              </ScrollView>
            </XStack>
            <YStack flexDirection={'column'} alignContent={'flex-end'}></YStack>
          </YStack>
        </XStack>
      </ScrollView>
      <XStack position="absolute" bottom={10} justifyContent={'space-evenly'} width={'100%'}>
        <BottomNavBar pageId="eyes" />
      </XStack>
    </>
  )
}
