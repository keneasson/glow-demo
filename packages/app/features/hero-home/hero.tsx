import React from 'react'
import { HeroBackgroundImage } from 'app/features/hero-home/hero-background-image'
import { HeroContent } from 'app/features/hero-home/hero-content'
import { PlainButton } from 'app/components/buttons/plain-button'
import { useRouter } from 'solito/router'

import bannerContainerImage from '../../assets/glow-main.png'
import { Paragraph } from '@my/ui'

export const Hero: React.FC = () => {
  const router = useRouter()
  const handleButtonPress = () => {
    router.push('/face')
  }

  return (
    <>
      <HeroBackgroundImage image={bannerContainerImage}>
        <Paragraph>Glow for it</Paragraph>
      </HeroBackgroundImage>
      <HeroContent text="Enim ad minim veniam, quis nostrum exercitationem" />
      <PlainButton label="Skin the Difference" onPress={handleButtonPress} />
    </>
  )
}
