import React from 'react'
import { Text } from '@my/ui'

type ProfileTitleProps = {
  value: string
}

export const ProfileTitle: React.FC<ProfileTitleProps> = ({ value }) => {
  return (
    <Text fontFamily="$body" fontSize={12} fontWeight={'bold'} color={'$color'}>
      {value}
    </Text>
  )
}
