import React from 'react'
import { Text, XStack } from '@my/ui'
import { styled } from 'tamagui'

const Card = styled(XStack, {
  backgroundColor: 'lightgrey',
  width: '30%',
  height: 200,
  margin: 3,
})

export const BellowTheFold: React.FC = () => {
  return (
    <XStack flexWrap={'wrap'}>
      <Card backgroundColor="lightgrey">
        <Text> Hello </Text>
      </Card>
      <Card backgroundColor="lightgrey">
        <Text> Cruel</Text>
      </Card>
      <Card backgroundColor="lightgrey">
        <Text> World</Text>
      </Card>
      <Card backgroundColor="lightgrey">
        <Text> Hello </Text>
      </Card>
      <Card backgroundColor="lightgrey">
        <Text> Cruel</Text>
      </Card>
      <Card backgroundColor="lightgrey">
        <Text> World</Text>
      </Card>
    </XStack>
  )
}
