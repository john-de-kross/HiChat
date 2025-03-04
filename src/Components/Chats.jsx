import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { mode } from "./UserMode";
import { onSnapshot, getFirestore, doc, collection, setDoc, updateDoc, getDocs, getDoc } from "firebase/firestore";
import { auth } from "./Firebase";

import { getDatabase, ref, onDisconnect, set, onValue } from "firebase/database";
function Chats({isLoading}) {
  const DB = getDatabase()
  const db = getFirestore()
  const {isDarkMode, handleSidebar, isSidebar} = mode()
  const inputRef = useRef(null)
  const navigate = useNavigate()


 
  
  useEffect(() => {
    if(isSidebar){
      document.body.style.overflowY = 'hidden'
    }else{
      document.body.style.overflowY = 'auto'
    }

    return () => {
      document.body.style.overflowY = 'auto'
    }

  }, [isSidebar]);

  useEffect(() => {
    try{
      const userId = auth.currentUser.uid;
      const presenceRef = ref(DB, `users/${userId}/online`) ;
      const connectedRef = ref(DB, '.info/connected');

      const unsub = onValue(connectedRef, (snap) => {
        if (snap.val() === true) {
          set(presenceRef, true);
          console.log("connected");


          onDisconnect(presenceRef).set(false);
          
        }else{
          console.log("Not connected");
        }
      })

      return () => unsub()
    }catch(error){
      console.log("Error occurreed while trying to set online users", error);
    }
             
  }, []);

 


  return (
    <div className={`w-full overflow-auto min-h-screen pb-24 chat-container  ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-white'}`}>

      <div className={`flex fixed w-full h-16 z-[1111] justify-between py-2 px-6  ${isDarkMode ? 'bg-slate-950 text-gray-100' : 'text-black bg-gray-100'}`}> 
        <div>
            <svg
            onClick={handleSidebar}
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="size-6 menu_icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
        <div className="text-lg font-medium">
            <h2>HiChat</h2>
        </div>
      </div>
    <div className={`flex py-16 justify-between px-14 border border-t-0 md:justify-center md:gap-32 border-x-0 ${isDarkMode ? 'border-y-slate-800' : 'border-y-slate-200'} pb-0`}>
      <NavLink to={'chats'} className={({isActive}) => `flex gap-2  border-b w-28 ${isDarkMode ? 'border-gray-400' : 'border-slate-800'}`}>
        <img
        className="w-6 h-6" 
        src="/chat.png" 
        alt="" />
        <p className="text-lg font-[500]">chats</p>
      </NavLink>
      <Link className="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} stroke="currentColor" 
        className="size-6 w-6 h-6">
        <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        <p className="text-lg font-[500]">call</p>
      </Link>
    </div>
    <div className="flex relative w-full justify-center py-4">
          <div className="absolute left-6 py-4">
              <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor"
              className="size-6 w-5 h-5 stroke-slate-500">
              <path strokeLinecap="round" 
              strokeLinejoin="round" 
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
          </div>

          <input  
          className={`search w-[90%] h-12 ${isDarkMode ? 'bg-slate-600' : 'bg-slate-200'} rounded-3xl outline-none px-9`}
          type="text" 
          placeholder="search messages"
          />
      </div>
      <Outlet />
    <div className="fixed bottom-24 right-4"> 
      <div onClick={() => navigate('/friends')} className="flex justify-center items-center font-[500] text-white content w-14 h-14 bg-blue-600 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>
    </div>
  </div>
) 
      
}

export default Chats;