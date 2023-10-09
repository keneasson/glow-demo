import React from 'react'
import { Text, XStack, YStack } from '@my/ui'

export const PrimaryCta: React.FC = () => {
  return (
    <YStack display={'flex'} width="100%" justifyContent={'flex-end'} marginBottom={15}>
      <YStack>
        <XStack flex={1} justifyContent={'flex-end'}>
          <Text color={'white'} fontSize={48}>
            Save&nbsp;
          </Text>
          <YStack justifyContent={'flex-end'}>
            <Text color={'white'} fontSize={24} marginBottom={0}>
              the&nbsp;
            </Text>
          </YStack>
        </XStack>
      </YStack>
      <YStack>
        <XStack flex={1} justifyContent={'flex-end'}>
          <Text color={'white'} fontSize={48}>
            world
          </Text>
        </XStack>
      </YStack>
    </YStack>
  )
}
