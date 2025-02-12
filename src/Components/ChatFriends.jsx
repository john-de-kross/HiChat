import React from "react";



function ChatFriends() {
    return ( 
        <div className={`w-full min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-slate-200'}`}>
            <div className={`w-full top-0 flex justify-between px-2 items-center h-20 ${isDarkMode ? 'bg-slate-800 text-gray-100' : 'bg-slate-300'}`}>
                <div className="flex gap-2">
                    <div className="py-2">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="size-6">
                        <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-slate-200">
                        <img 
                        src="profile.png" 
                        alt="profile" />
                    </div>
                    <div className="flex flex-col py-1">
                        <div>{username}</div>
                        <div className={`text-xs font-[400] py-1 ${isOnline? 'text-green-500' : 'text-gray-200'}`}>{isOnline? 'online' : 'offline'}</div>
                    </div>

                </div>
                <div className="flex gap-6 pb-6">
                    <div className="video">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="size-6 w-5 h-5">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0
                         0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25
                         2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </div>
                    <div>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="size-6 w-5 h-5">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25
                        2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97
                        1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 
                        1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963
                        3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <div>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6 h-5 w-5">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12
                    12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12
                    18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>

                    </div>
                </div>
            </div>

        </div>
     );
}

export default ChatFriends;