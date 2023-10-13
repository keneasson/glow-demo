import React from 'react'
import { PageLayoutSection } from 'app/components/page-layout-section'
import { PictureCard } from 'app/components/primary-section/picture-card'
import { Text, XStack } from '@my/ui'
import { PrimaryCard } from 'app/components/primary-section/primary-card'
import { useMedia } from 'tamagui'
import { useRouter } from 'solito/router'

import imageSm from '../../../assets/glow-main-sm.png'
import imageLg from '../../../assets/glow-main-sm.png'

type ContentProps = {}

export const Content: React.FC<ContentProps> = ({}) => {
  const media = useMedia()
  const maxLayoutWidth = media.gtMd ? 1246 : 720
  const justifyToutCont = media.gtMd ? 'space-between' : 'center'

  const router = useRouter()

  return (
    <PageLayoutSection width={'100%'} maxWidth={maxLayoutWidth}>
      <XStack
        width={'100%'}
        flexWrap={media.gtMd ? 'nowrap' : 'wrap'}
        justifyContent={justifyToutCont}
        gap={media.gtMd ? 24 : 0}
      >
        <PictureCard imageLg={imageLg} imageSm={imageSm} />
        <PrimaryCard>
          <Text fontFamily={'$body'} fontSize={24} justifyContent={'flex-start'}>
            The Glow Difference
          </Text>
          <Text fontFamily={'$body'} paddingBottom={26}>
            The Glow difference starts with Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum
            sed arcu. Massa id neque aliquam vestibulum morbi blandit cursus. Et ligula ullamcorper
            malesuada proin libero nunc consequat interdum. Pretium lectus quam id leo. Fermentum
            dui faucibus in ornare. Nunc scelerisque viverra mauris in aliquam sem fringilla ut.
            Commodo odio aenean sed adipiscing diam donec adipiscing. Pulvinar sapien et ligula
            ullamcorper malesuada. Massa tincidunt nunc pulvinar sapien et ligula. Est ullamcorper
            eget nulla facilisi etiam. Cursus turpis massa tincidunt dui ut. Mi sit amet mauris
            commodo quis imperdiet. Ac turpis egestas maecenas pharetra convallis posuere morbi.
            Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus. Quis lectus nulla
            at volutpat diam. Massa tincidunt nunc pulvinar sapien.
          </Text>
          <Text fontFamily={'$body'} paddingBottom={26}>
            Hendrerit gravida rutrum quisque non. Nisi porta lorem mollis aliquam ut porttitor leo a
            diam. Elementum nisi quis eleifend quam. At urna condimentum mattis pellentesque id nibh
            tortor id aliquet. Lacinia at quis risus sed vulputate odio ut. Massa tincidunt nunc
            pulvinar sapien et. Augue eget arcu dictum varius. Posuere urna nec tincidunt praesent
            semper. Id leo in vitae turpis massa sed. Habitant morbi tristique senectus et netus et
            malesuada fames ac. Dictum varius duis at consectetur lorem donec massa sapien faucibus.
            Vestibulum morbi blandit cursus risus at ultrices. Quis viverra nibh cras pulvinar
            mattis nunc. Ut faucibus pulvinar elementum integer enim. Tristique sollicitudin nibh
            sit amet commodo nulla facilisi nullam vehicula.
          </Text>
        </PrimaryCard>
      </XStack>
    </PageLayoutSection>
  )
}
