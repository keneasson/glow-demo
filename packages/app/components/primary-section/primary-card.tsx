import { styled } from 'tamagui'
import { isWeb, YStack } from '@my/ui'

export const PrimaryCard = styled(YStack, {
  backgroundColor: '#FCF9F6',
  minWidth: 272,
  borderRadius: 10,
  minHeight: 231,
  maxWidth: 611,
  width: isWeb ? 'calc(50% - 24px)' : '100%',
  padding: 48,
  alignItems: 'center',
  flex: 1,
})
