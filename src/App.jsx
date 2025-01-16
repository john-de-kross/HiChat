import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import Initialize from './Components/Initializing'
import Chats from './Components/Chats'
import {Routes, Route, Navigate, Outlet} from 'react-router-dom'
import UsersState from './Components/UsersState'
import { authState } from './Components/UsersState'
import Sidebar from './Components/Sidebar'
import UserMode from './Components/UserMode'


function App() {
  const {currentUser, loading} = authState()
  console.log('this is users', currentUser)
  if (loading) {
    return(
      <div className='flex justify-center items-center w-full h-screen'>
        <div className='animate-spin h-8 w-8 rounded-full bg-white border-4 border-blue-400 border-t-transparent'>
        </div>
      </div>
    )  
    
  }

  return (
    <UserMode>
      <Routes>
        <Route path='/' element={currentUser ? <ChatsOutlets /> : <Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/initialize' element={<Initialize />}/>
      </Routes>
    </UserMode>
    
    
  )

  function ChatsOutlets(){
    return(
      <>
       <Sidebar />
       <Chats />
       <Outlet />
      </>
      
    )
  }
}

export default App
