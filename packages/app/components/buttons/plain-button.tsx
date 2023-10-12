import React from 'react'
import { Button, Text, XStack } from '@my/ui'
import { styled } from 'tamagui'

type PlainButtonProps = {
  label: string
  onPress(): void
}

export const PlainButton: React.FC<PlainButtonProps> = ({ label, onPress }) => {
  function handleButtonPress() {
    onPress()
  }

  const StyledButton = styled(Button, {
    name: 'PlainButton',
    borderRadius: 10,
    backgroundColor: '#F76190',
    hoverStyle: {
      backgroundColor: '#D31E66',
    },
    pressStyle: {
      backgroundColor: '#E93D82',
    },
  })

  return (
    <XStack justifyContent={'center'}>
      <StyledButton onPress={handleButtonPress}>
        <Text color={'#161616'} fontFamily={'$body'} padding={15}>
          {label}
        </Text>
      </StyledButton>
    </XStack>
  )
}
