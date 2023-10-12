import React from 'react'
import { HeroBackgroundImage } from 'app/features/hero-home/hero-background-image'
import { HeroContent } from 'app/features/hero-home/hero-content'
import { PlainButton } from 'app/components/buttons/plain-button'
import { useRouter } from 'solito/router'

export const Hero: React.FC = () => {
  const router = useRouter()
  const handleButtonPress = () => {
    router.push('/glow-difference')
  }

  return (
    <>
      <HeroBackgroundImage text="Glow for it" />
      <HeroContent text="Enim ad minim veniam, quis nostrum exercitationem">
        <PlainButton label="Skin the Difference" onPress={handleButtonPress} />
      </HeroContent>
    </>
  )
}
