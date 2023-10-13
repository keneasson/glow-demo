import React, { Dispatch } from 'react'
import { useMedia, YStack } from 'tamagui'

import faceLg from '../../assets/tout-face-lg.png'
import faceSm from '../../assets/tout-face-sm.png'
import lipsLg from '../../assets/tout-lips-lg.png'
import lipsSm from '../../assets/tout-lips-sm.png'
import eyesLg from '../../assets/tout-eyes-lg.png'
import eyesSm from '../../assets/tout-eyes-sm.png'

import { PrimaryTout } from 'app/components/primary-section/primary-tout'
import { ScrollPoints } from 'app/features/home/screen'

type HomeBodyProps = {
  scrollPoints?: ScrollPoints
  setScrollPoints?: Dispatch<ScrollPoints>
}
export const HomeBody: React.FC<HomeBodyProps> = ({ scrollPoints, setScrollPoints }) => {
  const media = useMedia()
  const horizontalPadding = media.gtMd ? 55 : 24
  return (
    <YStack gap={64} alignItems="center" paddingHorizontal={horizontalPadding}>
      <PrimaryTout
        title="Face"
        linkTo={'/face'}
        imagesLg={faceLg}
        imageSm={faceSm}
        scrollPoints={scrollPoints}
        setScrollPoints={setScrollPoints}
      >
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
      </PrimaryTout>
      <PrimaryTout
        title="Eyes"
        linkTo={'/eyes'}
        imagesLg={eyesLg}
        imageSm={eyesSm}
        scrollPoints={scrollPoints}
        setScrollPoints={setScrollPoints}
      >
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
      </PrimaryTout>
      <PrimaryTout
        title="Lips"
        linkTo={'/lips'}
        imagesLg={lipsLg}
        imageSm={lipsSm}
        scrollPoints={scrollPoints}
        setScrollPoints={setScrollPoints}
      >
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
      </PrimaryTout>
    </YStack>
  )
}
