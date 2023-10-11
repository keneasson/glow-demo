import React from 'react'
import { Image, View } from '@my/ui'
import eyes from '../../assets/Eyes.svg'

export const EyesIcon: React.FC = () => {
  return (
    <View>
      <Image
        source={{ uri: eyes.src, width: 23, height: 24 }}
        width="100%"
        height="100%"
        marginRight={16}
      />
    </View>
  )
}
