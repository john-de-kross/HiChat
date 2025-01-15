import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Chats() {
  const [isFocused, setIsFocused] = useState(false);
  const searchFocus = () => {
    setIsFocused(true)
  }

  const removeSearch = () => {
    setIsFocused(false)
  }
  
  return (
    <div className="w-full min-h-screen">
      {!isFocused ? (
      <>
        <div className="flex fixed w-full h-16 z-[1111] justify-between py-2 px-6"> 
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
        <div className="text-lg font-medium">
            <h2>ChatFam</h2>
        </div>
    </div>
    <div className="flex py-16 justify-between px-14 border border-t-0 border-x-0 pb-2">
      <Link className="flex gap-2" to={'chats'}>
        <img
        className="w-6 h-6" 
        src="/chat.png" 
        alt="" />
        <p className="text-lg font-[500]">chats</p>
      </Link>
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
          <div className="absolute left-10 py-3">
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
          className="search w-[80%] h-12 bg-slate-200 rounded-2xl outline-none px-8"
          type="text" 
          placeholder="search messages"
          onFocus={searchFocus}
          />
      </div>
    <div className="chats text-lg font-[500] flex flex-1 justify-center items-center w-full h-72">
      <h2>No chats yet. Start a new conversation</h2>
    </div>
    <div className="fixed bottom-10 right-4"> 
      <div className="flex justify-center items-center font-[500] text-white content w-14 h-14 bg-blue-600 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>
    </div>
  </> 
      ):
      (
        <div className="w-full">
          <div className="flex justify-center py-2">
            <svg
            onClick={removeSearch} 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} stroke="currentColor" 
            className="size-6 absolute left-10 mt-[14px] mx-4 stroke-slate-500">
            <path strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <input 
            className="w-[80%] h-12 rounded-2xl bg-slate-100 outline-none px-12"
            type="text" 
            placeholder="search messages"
            />
          </div>
           
          
        </div>
      )
      }
        
    </div>
    );
}

export default Chats;