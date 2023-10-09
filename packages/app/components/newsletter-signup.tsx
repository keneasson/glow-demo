import React from 'react'
import { defaultStyles, Input, Text, YStack } from '@my/ui'

export const NewsletterSignup: React.FC = () => {
  return (
    <YStack flex-wrap={'wrap'}>
      <Text fontFamily={defaultStyles.fontFamily} width={'90%'} marginBottom={8}>
        Dont forget to join our newsletter
      </Text>
      <Input placeholder={'Your Email'} width={'80%'} height={'$sm'}></Input>
    </YStack>
  )
}
