import { PageLayoutSection } from 'app/components/page-layout-section'
import { PrimarySectionTitle } from 'app/components/primary-section/primary-section-title'
import { PictureCard } from 'app/components/primary-section/picture-card'
import { Text, XStack } from '@my/ui'
import { ArrowRight } from '@tamagui/lucide-icons'
import React, { Dispatch } from 'react'
import { PrimaryCard } from 'app/components/primary-section/primary-card'
import { useMedia } from 'tamagui'
import { useRouter } from 'solito/router'
import { ScrollPoints } from 'app/features/home/screen'

type PrimaryToutProps = {
  linkTo: string
  title: string
  imagesLg: any
  imageSm: any
  children: React.ReactNode
  setScrollPoints: Dispatch<ScrollPoints>
  scrollPoints: ScrollPoints
}

export const PrimaryTout: React.FC<PrimaryToutProps> = ({
  children,
  title,
  linkTo,
  imageSm,
  imagesLg,
  scrollPoints,
  setScrollPoints,
}) => {
  const media = useMedia()
  const maxLayoutWidth = media.gtMd ? 1246 : 720
  const justifyToutCont = media.gtMd ? 'space-between' : 'center'

  const router = useRouter()

  const handlePress = () => router.push(linkTo)

  return (
    <PageLayoutSection
      width={'100%'}
      maxWidth={maxLayoutWidth}
      onLayout={(event) => {
        const layout = event.nativeEvent.layout
        setScrollPoints &&
          setScrollPoints({
            ...scrollPoints,
            [linkTo]: layout.y,
          })
      }}
    >
      <PrimarySectionTitle>{title}</PrimarySectionTitle>
      <XStack
        width={'100%'}
        flexWrap={media.gtMd ? 'nowrap' : 'wrap'}
        justifyContent={justifyToutCont}
        gap={media.gtMd ? 24 : 0}
      >
        <PictureCard imageLg={imagesLg} imageSm={imageSm} />
        <PrimaryCard>
          <Text fontFamily={'$body'} paddingBottom={26}>
            {children}
          </Text>
          <XStack width={'100%'} onPress={handlePress}>
            <Text fontWeight={'500'} fontFamily={'$body'} lineHeight={20} verticalAlign="middle">
              Buy Now
            </Text>
            <ArrowRight verticalAlign="middle" marginLeft={10} height={20} />
          </XStack>
        </PrimaryCard>
      </XStack>
    </PageLayoutSection>
  )
}
