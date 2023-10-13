import React, { Dispatch } from 'react'
import { ScrollView } from 'react-native'
import { SizableText } from '@my/ui'
import { FaceIcon } from 'app/components/icons/face'
import { EyesIcon } from 'app/components/icons/eyes'
import { LipsIcon } from 'app/components/icons/lips'
import { useRouter } from 'solito/router'
import { NavButton } from 'app/components/buttons/nav-button'
import { ScrollPoints } from 'app/features/home/screen'

type MainNavItemsProps = {
  pageId?: string
  setIsOpen?: Dispatch<boolean>
  scrollViewRef?: ScrollView | null
  scrollPoints: ScrollPoints
}

export const MainNavItems: React.FC<MainNavItemsProps> = ({
  pageId,
  setIsOpen,
  scrollViewRef,
  scrollPoints,
}) => {
  const router = useRouter()
  const handlePress = (linkTo: string) => {
    console.log('scrollViewRef', scrollViewRef)
    console.log('HandlePress', { pageId, scrollPoints })
    if (pageId && scrollViewRef && typeof scrollPoints[linkTo] !== 'undefined') {
      scrollViewRef.scrollTo({
        y: scrollPoints[linkTo] + scrollPoints['offset'],
        x: 0,
        animated: true,
      })
      return
    }
    if (setIsOpen) {
      setIsOpen(false)
    }
    router.replace(linkTo)
  }

  return (
    <>
      <NavButton onPress={() => handlePress('/face')}>
        <FaceIcon size={24} color={pageId === 'face' ? '#F76190' : 'black'} />
        <SizableText>Face</SizableText>
      </NavButton>
      <NavButton onPress={() => handlePress('/eyes')}>
        <EyesIcon size={24} color={pageId == 'eyes' ? '#F76190' : 'black'} />
        <SizableText>Eyes</SizableText>
      </NavButton>
      <NavButton onPress={() => handlePress('/lips')}>
        <LipsIcon size={24} color={pageId == 'lips' ? '#F76190' : 'black'} />
        <SizableText>Lips</SizableText>
      </NavButton>
    </>
  )
}
