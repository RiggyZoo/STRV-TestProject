import React, {
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react'
import { CurrentUser } from '../types/currentUser'

type ContextProps = {
  userData?: CurrentUser
  setUserData: Dispatch<SetStateAction<CurrentUser | undefined>>
  authed: boolean
  viewMode: 'grid' | 'list'
  setViewMode: Dispatch<SetStateAction<any>>
  setAuthed: Dispatch<SetStateAction<boolean>>
}

const UserContext = React.createContext<ContextProps>({
  userData: undefined,
  setUserData: () => {},
  authed: false,
  setViewMode: () => {
    return 'grid'
  },
  viewMode: 'list',
  setAuthed: () => {},
})

export const useCurrentUser = () => useContext(UserContext)

export const UserManager: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<CurrentUser>()

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [authed, setAuthed] = useState<boolean>(false)

  const getModeFromStorage = () => {
    switch (localStorage.getItem('mode')) {
      case 'grid':
        setViewMode('grid')
        break
      case 'list':
        setViewMode('list')
        break
      default:
        setViewMode('grid')
    }
  }
  useEffect(() => {
    console.log(1)
    getModeFromStorage()
  }, [viewMode])

  const contextValue: ContextProps = {
    userData,
    viewMode,
    setViewMode,
    setUserData,
    authed,
    setAuthed,
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
