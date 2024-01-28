import React, { createContext, useContext, useState } from 'react'
import { User } from '~/types/user.type'
import { getAccessToken, getUserInfoFromStorage } from '~/utils/auth'

interface AuthProviderType {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  userInfo: User | null
  setUserInfo?: React.Dispatch<React.SetStateAction<User | null>>
  resetAuth: () => void
}
const initialContext: AuthProviderType = {
  isLoggedIn: Boolean(getAccessToken()),
  setIsLoggedIn: () => null,
  userInfo: getUserInfoFromStorage(),
  setUserInfo: () => null,
  resetAuth: () => null
}

const AuthContext = createContext<AuthProviderType>(initialContext)
const useAuth = () => {
  const context = useContext(AuthContext)
  if (typeof context === 'undefined') throw new Error('useAuth must be used within a AuthContext')
  return context
}
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialContext.isLoggedIn)
  const [userInfo, setUserInfo] = useState(initialContext.userInfo)
  const resetAuth = () => {
    setIsLoggedIn(false)
    setUserInfo(null)
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userInfo, setUserInfo, resetAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { useAuth, AuthProvider }
