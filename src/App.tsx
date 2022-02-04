import React from 'react'
import './App.css'
import { Input } from './components/Input'
import { ChangeViewIcon } from './components/ChangeViewIcon'
import LoginPage from './containers/LoginPage'

function App() {
  return (
    /*  <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/Apaap.tsx</code> and save to reload.
        </p>

        <Input
          label={'Nikita'}
          name={'Nik'}
          placeholder={'aa'}
          error={'Hello'}
          isTouched={true}
        />

        <ChangeViewIcon isActive={false} mode={'grid'} />
      </header>
    </div>*/
    <LoginPage />
  )
}

export default App
