import React from "react";
import { mode } from "./UserMode";
import { NavLink } from "react-router-dom";


function FootBar() {
    const {isDarkMode} = mode();

    return ( 
        <div className={`link fixed flex gap-4 justify-between items-center px-3 bottom-1 w-full h-16  ${isDarkMode ?'bg-slate-900': 'bg-white border-2 border-t border-y-0 border-x-0'}`}>
            <NavLink to={'/find-friends'} className={({isActive}) => `flex flex-col  ${isActive  ? 'flex text-white w-24 mt-1 h-[45px] justify-center items-center bg-blue-950 rounded-2xl' : ''} text-sm ${isDarkMode ?'text-white' : 'text-black'} font-[500] items-center`}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>
                Connect
            </NavLink>
            <NavLink to={"/request-sent"} className={({isActive}) => `flex flex-col text-sm ${isDarkMode ?'text-white' : 'text-black'} font-[500] items-center ${isActive ? 'text-white flex justify-center items-center h-[45px] bg-blue-950 w-24 rounded-2xl' : ''}`}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className={`size-6  w-5 h-5`}>
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Sent
            </NavLink>
            <NavLink to={"/friend requests"} className={({isActive}) => `flex flex-col text-sm ${isDarkMode ?'text-white' : 'text-black'} font-[500] items-center ${isActive ? 'text-white flex justify-center items-center h-[45px] bg-blue-950 w-24 rounded-2xl' : ''}`}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor"
                className="size-6 w-5 h-5">
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 
                9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>

            Request
            </NavLink>
            <NavLink to={"/updates"} className={({isActive}) => `flex flex-col text-sm ${isDarkMode ?'text-white' : 'text-black'} font-[500] items-center ${isActive ? 'text-white flex justify-center items-center h-[45px] bg-blue-950 w-24 rounded-2xl' : ''}`}>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="size-6 w-5 h-5">
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 
                7.23c-.38.054-.757.112-1.134.175C2.999 7.58 
                2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 
                2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 
                0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 
                48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
                Updates

            </NavLink>


        </div>
     );
}

export default FootBar;