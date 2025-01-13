import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import Initialize from './Components/Initializing'
import Chats from './Components/Chats'
import {Routes, Route, Navigate} from 'react-router-dom'
import UsersState from './Components/UsersState'
import { authState } from './Components/UsersState'


function App() {
  const {currentUser, loading} = authState()
  console.log('this is users', currentUser)
  if (loading) {
    return <p>Loading...</p>
    
  }

  return (
    <Routes>
      <Route path='/' element={currentUser ? <Chats /> : <Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/initialize' element={<Initialize />}/>
    </Routes>
    
  )
}

export default App
