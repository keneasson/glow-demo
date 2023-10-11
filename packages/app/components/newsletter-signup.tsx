import React from 'react'
import { Input, Text, XStack } from '@my/ui'

export const NewsletterSignup: React.FC = () => {
  return (
    <XStack>
      <Text fontFamily={'$body'} marginRight={14}>
        Join our newsletter
      </Text>
      <Input placeholder={'Email Address'} width={217} height={'$sm'} borderRadius={5}></Input>
    </XStack>
  )
}
