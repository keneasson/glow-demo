import React, { useContext, useState } from 'react'
import { ProfileImage } from 'app/components/profile/profile-image'
import { ProfileInfo } from 'app/components/profile/profile-info'
import { ProfileTitle } from 'app/components/profile/profile-title'
import { XStack, YStack } from '@my/ui'
import { User } from '@tamagui/lucide-icons'
import { UserProfileContext } from 'app/provider/user-profile-provider'

export const Profile: React.FC = ({}) => {
  const { getUserProfile } = useContext(UserProfileContext)

  const [name, setName] = useState('Sign In')
  const [title, setTitle] = useState('Title')

  return (
    <YStack>
      <XStack>
        <ProfileImage image={User} />
        <YStack paddingLeft={15} alignSelf={'center'}>
          <ProfileTitle value={name} />
          {title && <ProfileInfo value={title} />}
        </YStack>
      </XStack>
    </YStack>
  )
}
