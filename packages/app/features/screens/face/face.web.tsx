import { PageLayoutGeneral } from 'app/components/page-layout-general'
import { Paragraph, Text } from '@my/ui'
import React from 'react'
import { PageLayoutSection } from 'app/components/page-layout-section'

export const Face: React.FC = () => {
  return (
    <PageLayoutGeneral pageId="face">
      <PageLayoutSection>
        <Text fontFamily={'$body'} fontSize={24} justifyContent={'flex-start'} marginVertical={45}>
          Face
        </Text>
        <Paragraph>
          Arcu bibendum at varius vel pharetra vel turpis nunc eget. Nunc non blandit massa enim nec
          dui nunc. Ornare massa eget egestas purus viverra accumsan. Faucibus scelerisque eleifend
          donec pretium. Laoreet sit amet cursus sit amet. Massa eget egestas purus viverra
          accumsan. Sagittis vitae et leo duis ut diam quam nulla porttitor. Enim praesent elementum
          facilisis leo. Morbi leo urna molestie at elementum eu. Placerat duis ultricies lacus sed
          turpis tincidunt id aliquet risus. A cras semper auctor neque vitae tempus quam
          pellentesque nec. Et pharetra pharetra massa massa ultricies. Posuere ac ut consequat
          semper viverra nam libero justo laoreet. Vitae congue mauris rhoncus aenean vel elit.
          Magna eget est lorem ipsum dolor sit amet consectetur. At volutpat diam ut venenatis
          tellus. Ornare arcu dui vivamus arcu. Ut faucibus pulvinar elementum integer.
        </Paragraph>
      </PageLayoutSection>
    </PageLayoutGeneral>
  )
}
