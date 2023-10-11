import React from 'react'
import { Text, XStack } from '@my/ui'
import { styled, useMedia } from 'tamagui'
import { ImageBackground } from 'react-native'

import bgImageLg from '../../assets/glow-main-lg.png'
import bgImageSm from '../../assets/glow-main-sm.png'

type HeroBackgroundImageProps = {
  text: string
}

const BackgroundText = styled(Text, {
  color: '#ffffff',
  fontFamily: '$body',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 48,
})

export const HeroBackgroundImage: React.FC<HeroBackgroundImageProps> = ({ text }) => {
  const media = useMedia()
  return (
    <XStack
      flex={1}
      width="100%"
      minHeight={444}
      backgroundColor={'black'}
      justifyContent={'center'}
      style={{
        backgroundImage: `url(${bgImageLg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ImageBackground
        source={bgImageSm}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <BackgroundText>{text}</BackgroundText>
      </ImageBackground>
    </XStack>
  )
}
