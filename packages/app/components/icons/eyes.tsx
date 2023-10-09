import React from 'react'
import { Image, View } from '@my/ui'
import eyes from '../../assets/Eyes.svg'

export const EyesIcon: React.FC = () => {
  return (
    <View>
      <Image source={{ uri: eyes.src, width: 24, height: 24 }} marginRight={16} />
    </View>
  )
}
