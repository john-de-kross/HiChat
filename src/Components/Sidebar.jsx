import React, { useEffect, useState } from "react";

function Sidebar() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const handleMode = () => {
        setIsDarkMode(prev => !prev)
    }
    return ( 
        <div className="w-[70%] h-screen absolute z-[2000] bg-slate-100">
            <div className="header h-40 bg-[#474E93]">
                <div className="flex justify-between py-2 px-2">
                    <div className="username flex justify-center items-center text-lg font-[600] w-16 h-16 bg-slate-300 rounded-full">
                        Jj
                    </div>
                    <div className="flex w-16 h-10 text-lg gap-1 font-[500] justify-center items-center bg-slate-300 rounded-3xl ">
                        <img
                        className="w-7 h-7" 
                        src="/out.png" 
                        alt="log out" />
    
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 border-4 border-x-0 py-4 px-4">
                <div className="flex justify-start gap-4 text-lg font-[500]">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6 w-9 h-9">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <h2>Profile</h2>
                </div>
                <div className="settings flex justify-start gap-4 text-lg font-[500]">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6 w-9 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    Settings
                </div>
            </div>
            <div className="flex flex-col gap-4 py-6 text-lg font-[500] px-6">
                <div className="mode flex gap-4 justify-start">
                    Dark mode
                    <div onClick={handleMode} className={`w-14 h-8  rounded-2xl transition delay-300 duration-300 ${isDarkMode ? 'bg-green-500' : 'bg-slate-300'}`}>
                        <div className={`w-8 h-8 rounded-full bg-slate-100 transition delay-300 duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}>
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Sidebar;