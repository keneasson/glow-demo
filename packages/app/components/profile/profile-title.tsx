import React from 'react'
import { Text } from '@my/ui'

type ProfileTitleProps = {
  value: string
}

export const ProfileTitle: React.FC<ProfileTitleProps> = ({ value }) => {
  return (
    <Text fontFamily="$body" fontWeight={'500'} color={'$color'}>
      {value}
    </Text>
  )
}
