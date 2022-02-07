import React, { useEffect, useState } from 'react'

import LoginPage from './containers/LoginPage'
import { useCurrentUser } from './contexts/CurrentUser'
import { getUser } from './helpers/currentUser'
import Routes from './pages/routes'
import { getToken } from './utils/token'

function App() {
  const { userData, setUserData, authed, setAuthed } = useCurrentUser()
  const [localStoreHasJWT, setLocalStoreHasJWT] = useState<boolean>(
    Boolean(getToken()),
  )

  useEffect(() => {
    if (localStoreHasJWT) {
      setAuthed(true)
    }
  }, [localStoreHasJWT])

  useEffect(() => {
    setLocalStoreHasJWT(Boolean(getUser()))
    if (localStoreHasJWT && authed) {
      const user = JSON.parse(window.localStorage.getItem('user') || ' ')
      setUserData(user)
    }
  }, [authed])

  return <Routes localStoreHasJWT={localStoreHasJWT} authed={authed} />
}

export default App
