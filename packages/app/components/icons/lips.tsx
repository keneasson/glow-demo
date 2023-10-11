import React from 'react'
import { Image, View } from '@my/ui'
import lips from '../../assets/Lips.svg'

export const LipsIcon: React.FC = () => {
  return (
    <View>
      <Image source={{ uri: lips.src, width: 23, height: 24 }} marginRight={16} />
    </View>
  )
}
