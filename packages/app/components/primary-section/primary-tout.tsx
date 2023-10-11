import { PageLayoutSection } from 'app/components/page-layout-section'
import { PrimarySectionTitle } from 'app/components/primary-section/primary-section-title'
import { PictureCard } from 'app/components/primary-section/picture-card'
import { Text, XStack } from '@my/ui'
import { ArrowRight } from '@tamagui/lucide-icons'
import React from 'react'
import { PrimaryCard } from 'app/components/primary-section/primary-card'
import { useMedia } from 'tamagui'

type PrimaryToutProps = {
  linkTo: string
  title: string
  imagesLg: any
  imageSm: any
  children: React.ReactNode
}

export const PrimaryTout: React.FC<PrimaryToutProps> = ({
  children,
  title,
  linkTo,
  imageSm,
  imagesLg,
}) => {
  const media = useMedia()
  const textWidth = media.gtMd ? 611 : 272

  console.log('Medea', media.lg)

  return (
    <PageLayoutSection>
      <PrimarySectionTitle>{title}</PrimarySectionTitle>
      <PictureCard imageLg={imagesLg} imageSm={imageSm} />
      <PrimaryCard height={444} width={textWidth}>
        <Text fontFamily={'$body'} paddingBottom={26}>
          {children}
        </Text>
        <XStack width={'100%'}>
          {/*<Anchor href={linkTo} display={'contents'} style={{ textDecoration: 'none' }}>*/}
          <Text fontWeight={'500'} fontFamily={'$body'} lineHeight={20} verticalAlign="middle">
            Buy Now
          </Text>
          <ArrowRight verticalAlign="middle" marginLeft={10} height={20} />
          {/*</Anchor>*/}
        </XStack>
      </PrimaryCard>
    </PageLayoutSection>
  )
}
