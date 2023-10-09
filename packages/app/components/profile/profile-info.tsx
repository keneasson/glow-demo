import React from 'react'
import { Text } from '@my/ui'
import { YStack } from 'tamagui'

type InfoStringProps = {
  value: string
}

export const ProfileInfo: React.FC<InfoStringProps> = ({ value }) => {
  return (
    <YStack>
      <Text color={'white'}>{value}</Text>
    </YStack>
  )
}
