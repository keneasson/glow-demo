import React from 'react'
import { YStack } from '@my/ui'

import faceLg from '../../assets/tout-face-lg.png'
import faceSm from '../../assets/tout-face-sm.png'
import lipsLg from '../../assets/tout-lips-lg.png'
import lipsSm from '../../assets/tout-lips-sm.png'
import eyesLg from '../../assets/tout-eyes-lg.png'
import eyesSm from '../../assets/tout-eyes-sm.png'

import { PrimaryTout } from 'app/components/primary-section/primary-tout'

export const HomeBody: React.FC = () => {
  return (
    <YStack gap={64}>
      <PrimaryTout title="Face" linkTo={'/face'} imagesLg={faceLg} imageSm={faceSm}>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
      </PrimaryTout>
      <PrimaryTout title="Eyes" linkTo={'/eyes'} imagesLg={eyesLg} imageSm={eyesSm}>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
      </PrimaryTout>
      <PrimaryTout title="Lips" linkTo={'/lips'} imagesLg={lipsLg} imageSm={lipsSm}>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
      </PrimaryTout>
    </YStack>
  )
}
