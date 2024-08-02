import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UpdateEmoji } from './UpdateEmoji.jsx'
import {EmojiProvider} from '../context/EmojiContext.jsx'

function App() {

  return (
    <>
      <EmojiProvider>
        <UpdateEmoji></UpdateEmoji>
      </EmojiProvider>
    </>
  )
}

export default App
