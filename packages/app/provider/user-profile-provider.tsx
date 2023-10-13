import React, { createContext, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

type UserProfileType = {
  imageSource?: React.Component | undefined
  name: string
  title: string | null
}

type UserProfileContextType = {
  getUserProfile: () => UserProfileType
  setUserProfile: (key: string, value: string) => void
}

const defaultUser = {
  name: 'Sign In',
  title: null,
}

export const UserProfileContext = createContext<UserProfileContextType>(
  {} as UserProfileContextType
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
