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
import FootBar from './Components/Footbar'
import FindFriends from './Components/FindFriends'
import FriendRequest from './Components/FriendRequest'
import SentRequest from './Components/SentRequest'
import Friends from './Components/Friends'
import Lottie from "lottie-react";
import Animate from "./Components/Animate.json";
import IdCircle from './Components/CirculateId'
import MyChat from './Components/MyChat'
import HandleMessage from './Components/HandleMessage'
import { useEffect } from 'react'
import { collection, getDocs, updateDoc, getFirestore, doc} from 'firebase/firestore'
import { auth } from './Components/Firebase'



function App() {
  const db = getFirestore()
  const {currentUser, loading} = authState();
  if (loading) {
    return(
      <div className='flex justify-center items-center w-full h-screen'>
        <Lottie className="w-16 h-16" animationData={Animate} loop/>   
      </div>
    )  
    
  }
  useEffect(() => {
    const checkUsersOnline = async()=> {
      try{
        const userRef = collection(db, "users")
        const userData = await getDocs(userRef)
        Promise.all(userData.docs.map(async(user) => {
          if (user.id === auth.currentUser.uid) {
            const docRef = doc(db, "users", user.id)
            await updateDoc(docRef, {
              online: true
            })
          }
        }))
        console.log("online")
      

      }catch(err){
        console.log("Error occured while updating user's online", err)
      }
    }
    checkUsersOnline()
  }, [])

  return (
    
    <IdCircle>
      <UserMode>
        <HandleMessage>
          <Routes>
            <Route path='/' element={currentUser ? <ChatsOutlets /> : <Navigate to='/login' />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />}/>
            <Route path='initialize' element={<Initialize />}/>
            <Route path='find-friends' element={<ConnectFriends />}/>
            <Route path='friend requests' element ={<FriendRequestOutlets />}/>
            <Route path='request-sent' element={<RequestSentOutlets />} />
            <Route path='friends' element={<Friends />} />
            <Route path='my-chat' element={<MyChat/>} />
          </Routes>
        </HandleMessage>
        
      </UserMode>
    </IdCircle>
    
    
  )

  function ChatsOutlets(){
    return(
      <>
       <Sidebar />
       <Chats />
       <FootBar />
       <Outlet />
      </> 
    )
  }

  function ConnectFriends(){
    return(
      <>
       <FindFriends />
       <Outlet />
       <FootBar />
      </>
    )
  }
}

function FriendRequestOutlets(){
  return(
    <>
    <FriendRequest />
    <FootBar />
    </>
  )

}

function RequestSentOutlets(){
  return(
   <>
    <SentRequest />
    <FootBar />
   </>
  )
 }

export default App
