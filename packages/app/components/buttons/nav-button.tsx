import React from 'react'
import { Button } from '@my/ui'
import { styled } from 'tamagui'

type NavButtonProps = {
  children: React.ReactNode
  onPress(): void
}

export const NavButton: React.FC<NavButtonProps> = ({ children, onPress }) => {
  function handleButtonPress() {
    onPress()
  }

  const StyledButton = styled(Button, {
    borderRadius: 0,
    backgroundColor: 'white',
    hoverStyle: {
      backgroundColor: '#D31E66',
    },
    pressStyle: {
      backgroundColor: '#E93D82',
    },
  })

  return <StyledButton onPress={handleButtonPress}>{children}</StyledButton>
}
