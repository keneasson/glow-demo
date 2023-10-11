import React from 'react'
import { styled } from 'tamagui'
import { H2, XStack } from '@my/ui'

export type PrimarySectionTitleProps = {
  children: React.ReactNode
}

export const PrimarySectionTitle: React.FC<PrimarySectionTitleProps> = ({ children }) => {
  const Heading = styled(H2, {
    fontWeight: '800',
    fontSize: 30,
  })

  return (
    <XStack width={'100%'} marginVertical={16}>
      <Heading>{children}</Heading>
    </XStack>
  )
}
