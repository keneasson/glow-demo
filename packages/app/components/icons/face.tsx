import React from 'react'
import { Image, View } from '@my/ui'
import face from '../../assets/Face.svg'

export const FaceIcon: React.FC = () => {
  return (
    <View>
      <Image source={{ uri: face.src, width: 23, height: 24 }} marginRight={16} />
    </View>
  )
}
