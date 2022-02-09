import React, { useEffect, useState } from 'react'
import { useCurrentUser } from './contexts/CurrentUser'
import Routes from './pages/routes'
import { getToken, getUser } from './utils/userData'

function App() {
  const { setUserData, authed, setAuthed } = useCurrentUser()
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
