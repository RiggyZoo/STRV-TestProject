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
  const [auther, setAuther] = useState(false)
  console.log(authed, 'authed from app')

  useEffect(() => {
    if (localStoreHasJWT) {
      setAuthed(true)
    }
    console.log(authed, 'authed from app')
  }, [localStoreHasJWT])

  useEffect(() => {
    setLocalStoreHasJWT(Boolean(getUser()))
  }, [authed])

  return <Routes localStoreHasJWT={localStoreHasJWT} authed={authed} />
}

export default App
