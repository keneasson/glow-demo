import React from 'react'
import { Button, SizableText, XGroup } from '@my/ui'
import { FaceIcon } from 'app/components/icons/face'
import { EyesIcon } from 'app/components/icons/eyes'
import { LipsIcon } from 'app/components/icons/lips'
import { useRouter } from 'solito/router'

export const MainNavTabs: React.FC = () => {
  const router = useRouter()
  const handlePress = () => {}
  return (
    <XGroup height={48}>
      <Button onPress={() => router.push('/face')}>
        <FaceIcon />
        <SizableText>Face</SizableText>
      </Button>
      <Button onPress={() => router.push('/eyes')}>
        <EyesIcon />
        <SizableText>Eyes</SizableText>
      </Button>
      <Button onPress={() => router.push('/lips')}>
        <LipsIcon />
        <SizableText>Lips</SizableText>
      </Button>
    </XGroup>
  )
}
