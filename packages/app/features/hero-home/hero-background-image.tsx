import React from 'react'
import { XStack } from '@my/ui'

import { ImageBackground } from 'react-native'
import { StaticImageData } from 'next/image'

type HeroBackgroundImageProps = {
  image: StaticImageData
  children?: React.ReactNode
}

export const HeroBackgroundImage: React.FC<HeroBackgroundImageProps> = ({ children, image }) => {
  return (
    <XStack
      flex={1}
      width="100%"
      minHeight={444}
      backgroundColor={'black'}
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top right',
      }}
    >
      <ImageBackground
        source={image}
        style={{
          flex: 1,
          width: '100%',
          height: 266,
          justifyContent: 'center',
          alignSelf: 'flex-end',
        }}
        resizeMode={'center'}
      >
        {children && children}
      </ImageBackground>
    </XStack>
  )
}
