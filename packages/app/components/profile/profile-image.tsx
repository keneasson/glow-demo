import { Avatar } from '@my/ui'

export const ProfileImage = ({ image }) => {
  return (
    <>
      <Avatar size="$3" circular borderColor={'$borderColor'} borderWidth={1}>
        <Avatar.Image source={{ uri: image.src, height: 35 }} />
        <Avatar.Fallback bc="white" />
      </Avatar>
    </>
  )
}
