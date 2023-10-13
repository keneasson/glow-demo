import React from 'react'
import { Input, Text, XStack } from '@my/ui'
import { useMedia } from 'tamagui'

export const NewsletterSignup: React.FC = () => {
  const media = useMedia()
  const justifyContent = media.gtMd ? 'space-between' : 'flex-start'

  return (
    <XStack alignContent={'center'} justifyContent={justifyContent} flexWrap={'wrap'} rowGap={8}>
      <Text fontFamily={'$body'} marginRight={14}>
        Join our newsletter
      </Text>
      <Input
        placeholder={'Email Address'}
        width={217}
        height={'$3'}
        borderRadius={5}
        borderWidth={1}
        borderColor="#D31E66"
      ></Input>
    </XStack>
  )
}
