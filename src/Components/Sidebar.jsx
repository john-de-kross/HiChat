import React, { useEffect, useRef, useState } from "react";
import { mode} from "./UserMode";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Sidebar() {
    const {isDarkMode, handleMode, isSidebar, setIsSidebar} = mode();
    const sideRef = useRef(null) 
    const navigate = useNavigate()
    const removeSidebar = (e) =>{
        if (isSidebar && sideRef.current && !sideRef.current.contains(e.target) && !e.target.closest('.menu_icon')) {
            setIsSidebar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('click', removeSidebar) 
        return () => window.removeEventListener('click', removeSidebar)
    }, [isSidebar])

    const logOut = () =>{
        if(confirm("Are you sure you want to sign out?")){
            signOut(auth).then(() => {
                navigate('/login')
            })
            .catch((error) => {
                console.log("An error occurred",error)
            })
        }else{
            return null
        }
    }

    return ( 
        <div ref={sideRef} className={`w-[80%] overflow-y-auto sidebar h-full absolute z-[2000] ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-slate-100'} transition  ${isSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className={`header h-40 ${isDarkMode ? 'bg-slate-700' : 'bg-[#474E93]'}`}>
                <div className="flex justify-between py-2 px-2">
                    <div className={`username flex justify-center items-center text-lg font-[600] w-14 h-14 ${isDarkMode ? 'bg-slate-400': 'bg-slate-300'} rounded-full`}>
                        Jj
                    </div>
                    <div onClick={logOut} className={`flex w-14 h-9 text-lg gap-1 font-[500] justify-center items-center ${isDarkMode ? 'bg-slate-400' : 'bg-slate-300'} rounded-3xl`}>
                        <img
                        className="w-7 h-7" 
                        src="/out.png" 
                        alt="log out" />
    
                    </div>
                </div>
            </div>
            <div className={`flex flex-col gap-6 border-[1px] border-x-0 ${isDarkMode ? 'border-y-slate-600': 'border-y-slate-200'} py-4 px-4`}>
                <div className="flex justify-start gap-4 text-base font-[400]">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6 w-6 h-6">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Profile
                </div>
                <div className="settings flex justify-start gap-4 text-base font-[400]">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Settings
                </div>
            </div>
            <div className="flex flex-col gap-8 py-6 text-base font-[400] px-6">
                <div className="group flex gap-4 justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none" 
                     viewBox="0 0 24 24" 
                     strokeWidth={1.5} 
                     stroke="currentColor" 
                     className="size-6 w-6 h-6">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                    New Group
                </div>
                <div className="calls flex gap-4 justify-start">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6 w-6 h-6">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    Calls
                </div>
                <div className="bug flex gap-4 justify-start">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6 w-6 h-6">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                    Report Bug
                </div>
                <div className="saved flex gap-4 justify-start">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6 w-6 h-6">
                    <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    Saved messages


                </div>
                <div className="mode flex gap-4 justify-start">
                    Dark mode
                    <div onClick={handleMode} className={`w-10 mt-1 h-5 rounded-2xl transition delay-300 duration-300 ${isDarkMode ? 'bg-green-500' : 'bg-slate-300'}`}>
                        <div className={`w-5 h-5 rounded-full bg-slate-100 transition delay-300 duration-300 ${isDarkMode ? 'translate-x-5' : 'translate-x-0'}`}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Sidebar;