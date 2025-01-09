import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import Initialize from './Components/Initializing'
import Chats from './Components/Chats'
import {Routes, Route} from 'react-router-dom'



function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='signup' element={<SignUp />}/>
      <Route path='initializing' element={<Initialize />} />
    </Routes>
  )
}

export default App
