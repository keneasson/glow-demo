import React, { useContext } from 'react'
import { UserProfileContext } from 'app/provider/user-profile-provider'
import { ProfileImage } from 'app/components/profile/profile-image'
import { ProfileInfo } from 'app/components/profile/profile-info'
import { ProfileTitle } from 'app/components/profile/profile-title'
import { XStack, YStack } from '@my/ui'

export const Profile: React.FC = ({}) => {
  const { getUserProfile } = useContext(UserProfileContext)

  const { imageSource, name, title } = getUserProfile()

  return (
    <YStack>
      <XStack>
        <ProfileImage image={imageSource} />
        <YStack paddingLeft={15} alignSelf={'center'}>
          <ProfileTitle value={name} />
          {title && <ProfileInfo value={title} />}
        </YStack>
      </XStack>
    </YStack>
  )
}
