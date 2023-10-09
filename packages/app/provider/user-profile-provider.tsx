import { createContext, useState } from 'react'
import ProfilePicturePlaceholder from '../assets/profilePlaceholder.svg'
import { SafeAreaProvider } from 'react-native-safe-area-context'

type UserProfileType = {
  imageSource: typeof ProfilePicturePlaceholder
  name: string
  title: string | null
}

type UserProfileContextType = {
  getUserProfile: () => UserProfileType
  setUserProfile: (key: string, value: string) => void
}

const defaultUser = {
  imageSource: ProfilePicturePlaceholder,
  name: 'Sign In',
  title: null,
}

export const UserProfileContext = createContext<UserProfileContextType>(
  null as unknown as UserProfileContextType
)

export default function UserProfileProvider({ children }: { children: React.ReactNode }) {
  const [userProfile, setUserProfileInternal] = useState<UserProfileType>(defaultUser)

  const getUserProfile = () => userProfile
  const setUserProfile = (key: string, value: string) => {
    setUserProfileInternal({
      ...userProfile,
      [key]: value,
    })
  }

  return (
    <SafeAreaProvider>
      <UserProfileContext.Provider value={{ getUserProfile, setUserProfile }}>
        {children}
      </UserProfileContext.Provider>
    </SafeAreaProvider>
  )
}
