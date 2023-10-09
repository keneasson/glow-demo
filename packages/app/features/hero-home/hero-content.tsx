import React from 'react'
import { Paragraph, XStack } from '@my/ui'

type HeroContentProps = {
  text: string
}

export const HeroContent: React.FC<HeroContentProps> = ({ text }) => {
  return (
    <XStack justifyContent={'center'}>
      <Paragraph color={'$color'} margin={24} textAlign={'center'} fontSize={24}>
        {text}
      </Paragraph>
    </XStack>
  )
}
