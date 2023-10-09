import React from 'react'
import { Image, XStack } from '@my/ui'

import Facebook from '../assets/social-media/facebook.png'
import Twitter from '../assets/social-media/twitter.png'
import LinkedIn from '../assets/social-media/linkedIn.png'
import GitHub from '../assets/social-media/github.svg'

export const SocialLinks: React.FC = () => {
  const size = 24

  return (
    <XStack alignContent={'center'} justifyContent={'space-between'} width={'100%'}>
      <Image source={{ uri: Facebook.src, width: size, height: size }} />
      <Image source={{ uri: Twitter.src, width: size, height: size }} />
      <Image source={{ uri: LinkedIn.src, width: size, height: size }} />
      <Image source={{ uri: GitHub.src, width: size, height: size }} />
    </XStack>
  )
}
