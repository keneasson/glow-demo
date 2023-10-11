import React from 'react'
import { Paragraph } from '@my/ui'
import { styled, YStack } from 'tamagui'

type HeroContentProps = {
  text: string
  children: React.ReactNode
}

const HeroText = styled(YStack, {
  justifyContent: 'center',
  alignContent: 'center',
  marginTop: 55,
  marginBottom: 55,
})

export const HeroContent: React.FC<HeroContentProps> = ({ text, children }) => {
  return (
    <HeroText>
      <Paragraph
        flex={1}
        color={'#161616'}
        textAlign={'center'}
        fontSize={16}
        lineHeight={24}
        fontWeight="700"
        minHeight={20}
        minWidth={180}
      >
        {text}
      </Paragraph>
      <YStack marginTop={32}>{children}</YStack>
    </HeroText>
  )
}
