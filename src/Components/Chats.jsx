import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Chats() {
    return (
        <div className="w-full min-h-screen">
            <div className="flex justify-between py-2 px-6"> 
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className="text-lg font-medium">
                    <h2>ChatFam</h2>
                </div>
            </div>
            <div className="flex py-6 justify-between px-14 border border-t-0 border-x-0 pb-2">
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
            <Search />
            <div className="chats text-lg font-[500] flex justify-center items-center w-full h-full">
              <h2>No chats yet. Start a new conversation</h2>
            </div>
            <div className="fixed bottom-8 right-4"> 
              <div className="flex justify-center items-center font-[500] text-white content w-10 h-10 bg-blue-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </div>
        </div>
     

     );
}

export default Chats;