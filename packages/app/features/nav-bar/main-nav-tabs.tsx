import React from 'react'
import { SizableText, Tabs } from '@my/ui'
import { FaceIcon } from 'app/components/icons/face'
import { EyesIcon } from 'app/components/icons/eyes'
import { LipsIcon } from 'app/components/icons/lips'

export const MainNavTabs: React.FC = () => {
  return (
    <>
      <Tabs.Tab value="tab1">
        <FaceIcon />
        <SizableText>Face</SizableText>
      </Tabs.Tab>
      <Tabs.Tab value="tab2">
        <EyesIcon />
        <SizableText>Eyes</SizableText>
      </Tabs.Tab>
      <Tabs.Tab value="tab3">
        <LipsIcon />
        <SizableText>Lips</SizableText>
      </Tabs.Tab>
    </>
  )
}
