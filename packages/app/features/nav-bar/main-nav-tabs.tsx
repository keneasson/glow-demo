import React from 'react'
import { SizableText, Tabs } from '@my/ui'
import { FaceIcon } from 'app/components/icons/face'
import { EyesIcon } from 'app/components/icons/eyes'
import { LipsIcon } from 'app/components/icons/lips'

export const MainNavTabs: React.FC = () => {
  return (
    <Tabs>
      <Tabs.List height={48}>
        <Tabs.Tab value="face">
          <FaceIcon />
          <SizableText>Face</SizableText>
        </Tabs.Tab>
        <Tabs.Tab value="eyes">
          <EyesIcon />
          <SizableText>Eyes</SizableText>
        </Tabs.Tab>
        <Tabs.Tab value="lips">
          <LipsIcon />
          <SizableText>Lips</SizableText>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  )
}
