import React from 'react'
import { Image, Input, View, XStack } from '@my/ui'

import magnifier from '../assets/magnifier.svg'

export const SearchInput = () => {
  return (
    <XStack position={'relative'}>
      <View>
        <Image source={{ uri: magnifier.src, width: 24, height: 24 }} paddingRight={30} />
      </View>
      <Input placeholder={'Search'} width={'100%'} height={'$sm'} />
    </XStack>
  )
}
