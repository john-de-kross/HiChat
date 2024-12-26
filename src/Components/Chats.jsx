import React from "react";

function Chats() {
    return ( 
        <div className="w-full min-h-screen bg-white">
            <div className="flex justify-between app-name px-4 text-xl py-2 font-medium md:text-2xl">
                <h1>ChatGoons</h1>
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                 className="size-6 h-7 w-7 md:rounded-full md:hover:bg-gray-100">
                <path strokeLinecap="round" strokeLinejoin="round"
                 d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75
                  0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
            </div>
            <div className="search w-full md:flex md:justify-center md:items-center h-20 pl-4">
                <input className="w-[95%] srch-input rounded-2xl md:w-[80%] px-1 h-14" type="text" placeholder="Search..."/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 h-5 w-5 absolute ml-0.5 top-[10%]">
                <path strokeLinecap="round" strokeLinejoin="round" 
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </div>
           

        </div>
     );
}

export default Chats;